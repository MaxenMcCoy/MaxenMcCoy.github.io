var themes = [
    {image: "images/PEAK/peakBKG.jpg", color: "#ffbafd"},
    {image: "images/spacePizza/space-pizza-bkg.jpg", color: "#dbaf42"},
	{image: "images/emerald/background.png", color: "#43aa55"}
]

$(function() {
    var index = Math.floor(Math.random() * themes.length);

    $(".rngThemeBkg").css("background-image", "url(" + themes[index].image + ")")

    $(".rngTheme-color").css("color", themes[index].color);
    $(".rngTheme-color").css("border-color", themes[index].color);
})