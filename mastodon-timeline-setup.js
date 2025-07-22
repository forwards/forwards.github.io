const myTimeline = new MastodonTimeline.Init({
  mtContainerId: 'mt-container',
  instanceUrl: 'https://hachyderm.io', // Change this to your preferred instance
  timelineType: 'profile', // or 'hashtag' or 'profile'
  userId: '109858074080091787',
  profileName: '@R_Forwards',
  maxNbPostShow: '10',
  maxNbPostFetch: '10',
  insistSearchContainer: true, // This helps with timing issues
  insistSearchContainerTime: '5000' // Wait up to 5 seconds for container
});