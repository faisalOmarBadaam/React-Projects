const dummyApiResponse = {
  showLightAndDarkMood: true,
  showTecTacToeBoard: true,
  showTabs: true,
  showTreeView: true,
  showGitHubProfile: true,
};

export default function featureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) {
      setTimeout(
        resolve(dummyApiResponse),

        500
      );
    } else {
      reject("some error occurred ! please try again ");
    }
  });
}
