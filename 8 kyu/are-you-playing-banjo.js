//params: string, name
//return string either name + " plays banjo" or name + " does not play banjo"
//ex: areYouPlayingBanjo(richard) => richard plays banjo
//pseudocode: first convert name to lowercase, then check the name[0] to see if it is an r, then return strong depending on result
function areYouPlayingBanjo(name) {
    let lName = name.toLowerCase()
    if (lName[0] === 'r') {
      return `${name} plays banjo`
      } else {
        return `${name} does not play banjo`
      }
    }