function init() {
  Tabletop.init( {
    key: 'https://docs.google.com/spreadsheets/d/1wQJQJH5mQgMoR5-Xtt_mUWR_pWwvEfb6XZwK2vyXn-0/edit?usp=sharing',
    simpleSheet: true }
  ).then(function(data, tabletop) { 
    console.log(data)
  })
}
window.addEventListener('DOMContentLoaded', init)
