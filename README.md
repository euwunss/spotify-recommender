# Spotify Song Recommender 
## Authors 
Hiba Awais, Isabella Schush, Alexandra Golley, Daisy Maldonado, Olha Lashchukevych
## Overview
We chose Fulcrum GT's "Make It Make Sense" track to improve a common frustration: Spotify's song recommendation system. Often dissatisfied with its suggestions, we wanted to make a solution by creating a song recommendation algorithm by leveraging machine learning techniques.
Our program takes a song and its artist as inputs and recommends three songs of the same genre from a dataset of 90,000 songs. Some of the attributes we considered were dancibility, energy, valance, tempo, loudness and more, which we found are crucial for finding similarity between songs. 
The project is split into Python backend for the recommendation algorithm and react frontend for a seamless user interface.

## Features 
* Song Based Recommendation: Given a song name and artist, our program recommends three similar songs of the same genre.
* Genre Based Filtering: Song recommendations are the same genre as the input.
* KNN Algorithm: By using the K-Nearest Neighbors algorithm, we were able to take many features into account when recommending songs.
* React Front-End: The interface is built with React for an interactive and visually appealing interface. 

## Requirements 
### Backend
* Python 3.x
* Python Libraries:
  * Pandas
  * NumPy
  * Scikit-learn
  * Matplotlib
  * Seaborn
### Frontend 
* Npm and flask

## How to Use 
### Backend 
1. Clone the repository
2. Download archive.csv
3. Set up Python environment and run program
### Frontend
1. Install Dependencies
2. Run the Program

## Code Overview 
* Data Preprocessing Function
  * Purpose: cleans the dataset by removing missing values, dropping duplicates, and removing unnecessary columns
* Song Search Function
  * Purpose: takes the song and artist name as input and finds it in the dataset
* Genre Filtering Function
  * Purpose: creates a subset of data for songs of the same genre as the input
* Song Recommendation Function
  * Uses KNN (K-Nearest Neighbor) Algorithm to recommend three similar songs based on our specific audio features.
* UI Interface
  * Using React, we were able to implement an intereactive interface to prompt user for a song name and artist

## Credits 
* Dataset: The dataset is sourced from Kaggle, which you can find [here](https://www.kaggle.com/datasets/maharshipandya/-spotify-tracks-dataset?resource=download)
* Machine Learning Model: We used the KNN model from Scikit-learn library
