# Music Recommendation Algorithm 
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sb
from sklearn.neighbors import NearestNeighbors

# Load music data
def data_preprocessing(music_data):
    # Handle Missing and Duplicated Values
    music_data.dropna(inplace=True)  # Drop rows with missing values (there were only 3 rows with missing values)
    music_data.drop_duplicates(inplace=True)  # Drop duplicate rows
    
    # Data Cleansing
    music_data.drop(['Unnamed: 0'], axis=1, inplace=True)
    music_data.drop_duplicates(subset = ['track_name', 'artists'],inplace=True)
    return music_data


def search_for_song(song_name, artist_name, music_data):
    # Search for a song in the dataset
    lower_case_song_name = song_name.lower()
    lower_case_artist_name = artist_name.lower()
  
    song = music_data[(music_data['track_name'].str.lower() == lower_case_song_name) & (music_data['artists'].str.lower().str.contains(lower_case_artist_name))]

    if (song.empty):
      return None
    else:
      return song

def genre_subset(song):
  song_genre = song['track_genre'].values[0]
  genre_data = music_data[music_data['track_genre'] == song_genre]
  return genre_data

def find_similar_songs(song, genre_data):
  # Find three similar songs 
  features = ['danceability', 'energy', 'valence', 'liveness', 'loudness', 'tempo', 'acousticness', 'instrumentalness', 'speechiness']
  model_data = genre_data[features]
  model_data = model_data.drop(song.index)
  

  model_knn = NearestNeighbors(n_neighbors=3, metric='cosine', algorithm = 'brute')
  model_knn.fit(model_data)
  song_features = pd.DataFrame(song[features].values.reshape(1, -1), columns=features)

  similar_song_indices = model_knn.kneighbors(song_features, return_distance=False)
  similar_songs = genre_data.iloc[similar_song_indices[0]]
  return similar_songs


if __name__ == "__main__":
    music_data = pd.read_csv('archive.csv')
    music_data = data_preprocessing(music_data)
    song = None

    while song is None:
        song_input = input("Enter a song name: ")
        artist_input = input("Enter an artist name (first and last): ")
        song = search_for_song(song_input, artist_input, music_data)
    genre_data = genre_subset(song)

    similar_songs = find_similar_songs(song, genre_data)
    print("Similar songs:")
    print(similar_songs['track_name'].values)




  


