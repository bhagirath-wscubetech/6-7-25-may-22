var dataBox = $("#data")
var contentBox = $("#content")

function addToDo() {
    var toDo = dataBox.val() //get
    dataBox.val("") //set

    contentBox.append(
        `
            <div class="item" onclick="done(this)">
                ${toDo}
                <span onclick="removeMe(this)">X</span>
            </div>
        `
    )
}

function done(item) {
    $(item).toggleClass("done")
}

function removeMe(cross) {
    var parent = $(cross).parent()
        // parent.fadeOut(
        //         5000,
        //         function() {
        //             parent.remove()
        //         }
        //     )
        //  
    parent.addClass("remove")
    setTimeout(
        function() {
            parent.remove()
        },
        500
    )
}