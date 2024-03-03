export const API_KEY = 'AIzaSyC67uJ2fYZTleQpQg5U2K7qnV2ozYN6Y58';

export const value_converter = (value) => {
    if (value >= 1000000000) {
        return Math.floor(value / 1000000000) + 'B';
    }
    else if (value >= 1000000) {
        return Math.floor(value / 1000000) + 'M';
    }
    else if (value >= 1000) {
        return Math.floor(value / 1000) + 'K';
    }
    else return value;
}