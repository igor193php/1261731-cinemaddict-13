import ViewAbstract from "../../main-classes/view-abstract";

const createProfileRatingTemplate = (user) => {
  const {rank} = user;

  return `<section class="header__profile profile">
    <p class="profile__rating">${rank}</p>
  <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`;
};

export default class ProfileRatingTemplate extends ViewAbstract {
  constructor(user) {
    super();
    this._user = user;
  }

  getTemplate() {
    return createProfileRatingTemplate(this._user);
  }

}
