import { landingPage } from './landing.page';
import { signInPage } from './signin.page';
import { signOutPage } from './signout.page';
import { signupPage } from './signup.page';
import { recipesListPage } from './recipeslist.page';
// import { profilesPage } from './profiles.page';
// import { projectsPage } from './projects.page';
// import { interestsPage } from './interests.page';
// import { homePage } from './home.page';
// import { addProjectPage } from './addproject.page';
// import { filterPage } from './filter.page';
import { navBar } from './navbar.component';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'foo' };

fixture('flavor-forge localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signInPage.signin(testController, credentials.username, credentials.password);
  await navBar.logout(testController);
  await signOutPage.isDisplayed(testController);
});

test('Test that signup page, then logout works', async (testController) => {
// Create a new user email address that's guaranteed to be unique.
  const newUser = `user-${new Date().getTime()}@foo.com`;
  await navBar.gotoSignUpPage(testController);
  await signupPage.isDisplayed(testController);
  await signupPage.signupUser(testController, newUser, credentials.password);
  // New user has successfully logged in, so now let's logout.
  await navBar.logout(testController);
  await signOutPage.isDisplayed(testController);
});

// test('Test that profiles page displays', async (testController) => {
//   await navBar.gotoProfilesPage(testController);
//   await profilesPage.isDisplayed(testController);
//   await profilesPage.hasDefaultProfiles(testController);
// });

// test('Test that interests page displays', async (testController) => {
//  await navBar.gotoInterestsPage(testController);
//  await interestsPage.isDisplayed(testController);
//  await interestsPage.hasDefaultInterests(testController);
// });

test('Test that recipe list page displays and has its cards', async (testController) => {
  await navBar.gotoRecipesListPage(testController);
  await recipesListPage.isDisplayed(testController);
  await recipesListPage.hasDefaultRecipes(testController);
});

/* test('Test that home page display and profile modification works', async (testController) => {
  await navBar.ensureLogout(testController);
  await navBar.gotoSignInPage(testController);
  await signInPage.signin(testController, credentials.username, credentials.password);
  await homePage.isDisplayed(testController);
  // await homePage.updateProfile(testController, credentials.firstName);
  await navBar.ensureLogout(testController);
}); */

// test('Test that addProject page works', async (testController) => {
//  await navBar.ensureLogout(testController);
//  await navBar.gotoSignInPage(testController);
//  await signInPage.signin(testController, credentials.username, credentials.password);
//  await navBar.gotoAddProjectPage(testController);
//  await addProjectPage.isDisplayed(testController);
//  await addProjectPage.addProject(testController);
// });

// test('Test that filter page works', async (testController) => {
//  await navBar.ensureLogout(testController);
//  await navBar.gotoSignInPage(testController);
//  await signInPage.signin(testController, credentials.username, credentials.password);
//  await navBar.gotoFilterPage(testController);
//  await filterPage.isDisplayed(testController);
//  await filterPage.filter(testController);
// });
