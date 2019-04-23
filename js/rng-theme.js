var themes = [
    {image: "images/PEAK/peakBKG.jpg", color: "#ffbafd"},
    {image: "images/spacePizza/space-pizza-bkg.jpg", color: "#bd3536"},
	{image: "images/emerald/background.png", color: "#43aa55"},
	{image: "images/carousel/multiplayer-zombies.png", color: "#f3e0a3"}
]

$(function() {
    var index = Math.floor(Math.random() * themes.length);

    $(".rngThemeBkg").css("background-image", "url(" + themes[index].image + ")")

    $(".rngTheme-color").css("color", themes[index].color);
    $(".rngTheme-color").css("border-color", themes[index].color);
})