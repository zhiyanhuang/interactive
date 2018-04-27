function runSlots() {
    var slotOne;
    var slotTwo;
    var slotThree;
    var images = [
        "../images/1.jpg",
        "../images/2.jpg",
        "../images/3.jpg"
    ];

    slotOne = Math.floor(Math.random() * 3) + 1;
    slotTwo = Math.floor(Math.random() * 3) + 1;
    slotThree = Math.floor(Math.random() * 3) + 1;

    $($(".img-box-in")[0]).html('<img src="' + images[slotOne - 1] + '">');
    $($(".img-box-in")[1]).html('<img src="' + images[slotTwo - 1] + '">');
    $($(".img-box-in")[2]).html('<img src="' + images[slotThree - 1] + '">');

    if (slotOne === slotTwo && slotTwo === slotThree) {
        $(".info p").html("Oh,Good Luck!");
        return null;
    }
    if (slotOne !== undefined && slotTwo !== undefined && slotThree !== undefined) {
        $(".info p").html(slotOne + " " + slotTwo + " " + slotThree);
    }
    $(".info p").append("Oh,Sorry!");
    return [
        slotOne,
        slotTwo,
        slotThree
    ];
}

$(document).ready(function() {
    $(".btn button").click(function() {
        runSlots();
    });
});
