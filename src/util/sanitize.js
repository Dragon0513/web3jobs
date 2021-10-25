// function to remove spaces and periods from the name passed in
// replaces it with a hypen
// ie abc 123.com -> abc-123-com
export const makeFriendlyUrl = name => name.toLowerCase().replace(/ /g, '-').replace(/\./g, '-');

// checks if an object is empy
export const isEmpty = checkMe => {
    return Object.keys(checkMe).length === 0
}

export const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1)