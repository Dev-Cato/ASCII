function copyToClip(text) {

    var originalText = document.getElementById("myInput");
    originalText = originalText.value


    var line1 = "-- "
    var line2 = "-- "
    var line3 = "-- "
    var line4 = "-- "
    var line5 = "-- "
    var line6 = "-- "


    for (let i = 0; i < originalText.length; i++) {
        var letter = originalText.charAt(i)
        letter = letter.toLowerCase()

        line1 = line1 + charList[letter][0]
        line2 = line2 + charList[letter][1]
        line3 = line3 + charList[letter][2]
        line4 = line4 + charList[letter][3]
        line5 = line5 + charList[letter][4]
        line6 = line6 + charList[letter][5]
    }

    navigator.clipboard.writeText(line1 + "\n" + line2 + "\n" + line3 + "\n" + line4 + "\n" + line5 + "\n" + line6);
}

var charList = {
    " ": [
        "     ",
        "     ",
        "     ",
        "     ",
        "     ",
        "     "
    ],
    
    "a": [
        " █████╗ ",
        "██╔══██╗",
        "███████║",
        "██╔══██║",
        "██╔══██║",
        "╚═╝  ╚═╝"
    ],

    "b": [
        "██████╗ ",
        "██╔══██╗",
        "██████╔╝",
        "██╔══██╗",
        "██████╔╝",
        "╚═════╝ ",
    ],

    "c": [
        " ██████╗",
        "██╔════╝",
        "██║     ",
        "██║     ",
        "╚██████╗",
        " ╚═════╝"
    ],

    "d": [
        "██████╗ ",
        "██╔══██╗",
        "██║  ██║",
        "██║  ██║",
        "██████╔╝",
        "╚═════╝ "
    ],

    "e": [
        "███████╗",
        "██╔════╝",
        "█████╗  ",
        "██╔══╝  ",
        "███████╗",
        "╚══════╝"
    ],

    "f": [
        "███████╗",
        "██╔════╝",
        "█████╗  ",
        "██╔══╝  ",
        "██║     ",
        "╚═╝     "
    ],

    "g": [
        " ██████╗ ",
        "██╔════╝ ",
        "██║  ███╗",
        "██║   ██║",
        "╚██████╔╝",
        " ╚═════╝ "
    ],

    "h": [
        "██╗  ██╗",
        "██║  ██║",
        "███████║",
        "██╔══██║",
        "██║  ██║",
        "╚═╝  ╚═╝"
    ],
    "i": [
        "██╗",
        "██║",
        "██║",
        "██║",
        "██║",
        "╚═╝"
    ],
    "j": [
        "     ██╗",
        "     ██║",
        "     ██║",
        "██   ██║",
        "╚█████╔╝",
        " ╚════╝ "
    ],
    "k": [
        "██╗  ██╗",
        "██║ ██╔╝",
        "█████╔╝ ",
        "██╔═██╗ ",
        "██║  ██╗",
        "╚═╝  ╚═╝",
    ],
    "l": [
        "██╗     ",
        "██║     ",
        "██║     ",
        "██║     ",
        "███████╗",
        "╚══════╝"
    ],
    "m": [
        "███╗   ███╗",
        "████╗ ████║",
        "██╔████╔██║",
        "██║╚██╔╝██║",
        "██║ ╚═╝ ██║",
        "╚═╝     ╚═╝"
    ],
    "n": [
        "███╗   ██╗",
        "████╗  ██║",
        "██╔██╗ ██║",
        "██║╚██╗██║",
        "██║ ╚████║",
        "╚═╝  ╚═══╝"
    ],
    "o": [
        " ██████╗ ",
        "██╔═══██╗",
        "██║   ██║",
        "██║   ██║",
        "╚██████╔╝",
        " ╚═════╝ "
    ],
    "p": [
        "██████╗ ",
        "██╔══██╗",
        "██████╔╝",
        "██╔═══╝ ",
        "██║     ",
        "╚═╝     "
    ],
    "q": [
        " ██████╗ ",
        "██╔═══██╗",
        "██║   ██║",
        "██║▄▄ ██║",
        "╚██████╔╝",
        " ╚══▀▀═╝ "
    ],
    "r": [
        "██████╗ ",
        "██╔══██╗",
        "██████╔╝",
        "██╔══██╗",
        "██║  ██║",
        "╚═╝  ╚═╝"
    ],
    "s": [
        "███████╗",
        "██╔════╝",
        "███████╗",
        "╚════██║",
        "███████║",
        "╚══════╝"
    ],
    "t": [
        "████████╗",
        "╚══██╔══╝",
        "   ██║   ",
        "   ██║   ",
        "   ██║   ",
        "   ╚═╝   "
    ],
    "u": [
        "██╗   ██╗",
        "██║   ██║",
        "██║   ██║",
        "██║   ██║",
        "╚██████╔╝",
        " ╚═════╝ "
    ],
    "v": [
        "██╗   ██╗",
        "██║   ██║",
        "██║   ██║",
        "╚██╗ ██╔╝",
        " ╚████╔╝ ",
        "  ╚═══╝  "
    ],
    "w": [
        "██╗    ██╗",
        "██║    ██║",
        "██║ █╗ ██║",
        "██║███╗██║",
        "╚███╔███╔╝",
        " ╚══╝╚══╝ "
    ],
    "x": [
        "██╗  ██╗",
        "╚██╗██╔╝",
        " ╚███╔╝ ",
        " ██╔██╗ ",
        "██╔╝ ██╗",
        "╚═╝  ╚═╝"
    ],
    "y": [
        "██╗   ██╗",
        "╚██╗ ██╔╝",
        " ╚████╔╝ ",
        "  ╚██╔╝  ",
        "   ██║   ",
        "   ╚═╝   "

    ],
    "z": [
        "███████╗",
        "╚══███╔╝",
        "  ███╔╝ ",
        " ███╔╝  ",
        "███████╗",
        "╚══════╝"
    ],

    "1": [
        " ██╗",
        "███║",
        "╚██║",
        " ██║",
        " ██║",
        " ╚═╝"
    ],

    "2": [
        "██████╗ ",
        "╚════██╗",
        " █████╔╝",
        "██╔═══╝ ",
        "███████╗",
        "╚══════╝"
    ],

    "3": [
        "██████╗ ",
        "╚════██╗",
        " █████╔╝",
        " ╚═══██╗",
        "██████╔╝",
        "╚═════╝ "
    ],
    "4": [
        "██╗  ██╗",
        "██║  ██║",
        "███████║",
        "╚════██║",
        "     ██║",
        "     ╚═╝"
    ],
    "5": [
        "███████╗",
        "██╔════╝",
        "███████╗",
        "╚════██║",
        "███████║",
        "╚══════╝"
    ],
    "6": [
        " ██████╗ ",
        "██╔════╝ ",
        "███████╗ ",
        "██╔═══██╗",
        "╚██████╔╝",
        " ╚═════╝ "
    ],
    "7": [
        "███████╗",
        "╚════██║",
        "   ██╔╝ ",
        "  ██╔╝  ",
        "  ██║   ",
        "  ╚═╝   "
    ],
    "8": [
        " █████╗ ",
        "██╔══██╗",
        "╚█████╔╝",
        "██╔══██╗",
        "╚█████╔╝",
        " ╚════╝ "
    ],
    "9": [
        " █████╗ ",
        "██╔══██╗",
        "╚██████║",
        " ╚═══██║",
        " █████╔╝",
        " ╚════╝ "
    ],
    "0": [
        " ██████╗ ",
        "██╔═████╗",
        "██║██╔██║",
        "████╔╝██║",
        "╚██████╔╝",
        " ╚═════╝ "
    ],



    ".": [
        "   ",
        "   ",
        "   ",
        "   ",
        "██╗",
        "╚═╝"
    ],

    "!": [
        "██╗",
        "██║",
        "██║",
        "╚═╝",
        "██╗",
        "╚═╝"
    ],

    "?": [
        "██████╗ ",
        "╚════██╗",
        "  ▄███╔╝",
        "  ▀▀══╝ ",
        "  ██╗   ",
        "  ╚═╝   "
    ],

    "'": [
        " ██╗ ",
        " ╚═╝ ",
        "     ",
        "     ",
        "     ",
        "     "
    ],

    "/": [
        "    ██╗",
        "   ██╔╝",
        "  ██╔╝ ",
        " ██╔╝  ",
        "██╔╝   ",
        "╚═╝    "
    ],

}