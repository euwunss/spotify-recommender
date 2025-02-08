from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.neighbors import NearestNeighbors

app = Flask(__name__)
CORS(app)  # Allow frontend requests

# Load and preprocess music data
music_data = pd.read_csv('archive.csv')  # Ensure the correct path
def data_preprocessing(music_data):
    music_data.dropna(inplace=True)
    music_data.drop_duplicates(inplace=True)
    if 'Unnamed: 0' in music_data.columns:
        music_data.drop(['Unnamed: 0'], axis=1, inplace=True)
    music_data.drop_duplicates(subset=['track_name', 'artists'], inplace=True)
    return music_data

music_data = data_preprocessing(music_data)

def search_for_song(song_name, artist_name):
    lower_case_song_name = song_name.lower()
    lower_case_artist_name = artist_name.lower()
    song = music_data[
        (music_data['track_name'].str.lower() == lower_case_song_name) &
        (music_data['artists'].str.lower().str.contains(lower_case_artist_name))
    ]
    return None if song.empty else song

def genre_subset(song):
    song_genre = song['track_genre'].values[0]
    return music_data[music_data['track_genre'] == song_genre]

def find_similar_songs(song, genre_data):
    features = ['danceability', 'energy', 'valence', 'liveness', 'loudness', 'tempo', 'acousticness', 'instrumentalness', 'speechiness']
    model_data = genre_data[features].drop(song.index)
    
    model_knn = NearestNeighbors(n_neighbors=3, metric='cosine', algorithm='brute')
    model_knn.fit(model_data[features])  # Ensure feature names are used correctly
    
    song_features = song[features].values.reshape(1, -1)
    similar_song_indices = model_knn.kneighbors(song_features, return_distance=False)
    
    return genre_data.iloc[similar_song_indices[0]]

@app.route('/recommend', methods=['GET'])
def recommend():
    song_name = request.args.get('song')
    artist_name = request.args.get('artist')

    if not song_name or not artist_name:
        return jsonify({'error': 'Missing song or artist name'}), 400

    song = search_for_song(song_name, artist_name)
    if song is None:
        return jsonify({'error': 'Song not found'}), 404

    genre_data = genre_subset(song)
    similar_songs = find_similar_songs(song, genre_data)

    # Convert DataFrame to JSON
    recommended_songs = similar_songs[['track_name', 'artists']].to_dict(orient='records')

    return jsonify({'recommended_songs': recommended_songs})

if __name__ == '__main__':
    app.run(debug=True)



  


