import ActionTypes from "./ActionTypes";
import _orderBy from "lodash/orderBy";

const reducers = {
  [ActionTypes.GET_USER]: async state => {
    const response = await fetch("https://swapi.co/api/people/11/?format=json");
    const user = await response.json();
    return { user };
  },
  [ActionTypes.CHANGE_NAME]: state => {
    return { user: { name: "Michael Jackson" } };
  },
  [ActionTypes.ADD_POST]: state => {
    return { posts: [...state.posts, { id: 6, title: "Post 6" }] };
  },
  [ActionTypes.GET_POSTS]: async state => {
    const responseFilms = await fetch(
      "https://swapi.co/api/films/?format=json"
    );
    const films = await responseFilms.json();

    return { posts: _orderBy(films.results, ["episode_id"], ["asc"]) };
  }
};

export default reducers;
