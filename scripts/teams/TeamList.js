import {useTeams, getTeams} from "./TeamProvider.js"
import {TeamHTMLConverter} from "./Team.js"

const contentTarget = document.querySelector(".sidebar--teams-list")

export const listTeams = () => {
  getTeams()
    .then( () => {
      const allHTML = useTeams()
      .map((team) => {
        return TeamHTMLConverter(team)
      })
      .join("")
      render(allHTML)
    })
  
}

const render = (htmlString) => {
  contentTarget.innerHTML += `${htmlString}`
}