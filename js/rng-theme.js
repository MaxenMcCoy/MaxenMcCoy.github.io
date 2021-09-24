var themes = [
    {image: "images/PEAK/peakBKG.jpg", color: "#ff0094"},
    {image: "images/spacePizza/space-pizza-bkg.jpg", color: "#bd3536"},
	{image: "images/emerald/background.jpg", color: "#43aa55"},
	{image: "images/zombies/multiplayer-zombies.jpg", color: "#f3e0a3"},
	{image: "images/miscBackgrounds/delugeional.jpg", color: "#c24651"},
	{image: "images/miscBackgrounds/signalsInDust.jpg", color: "#f7c83c"},
	{image: "images/miscBackgrounds/gunball.jpg", color: "#FF6625"},
	{image: "images/miscBackgrounds/goap.jpg", color: "#d4bf83"},
	{image: "images/miscBackgrounds/floorsOfFright.jpg", color: "#bed600"},
	{image: "images/miscBackgrounds/CityByTheSea.jpg", color: "#c2adff"}
]

$(function() {
    var index = Math.floor(Math.random() * themes.length);

    $(".rngThemeBkg").css("background-image", "url(" + themes[index].image + ")")

    $(".rngTheme-color").css("color", themes[index].color);
    $(".rngTheme-color").css("border-color", themes[index].color);
})