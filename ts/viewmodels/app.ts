import $ from "jquery";
import "jquery-ui";

$(`.rack`).sortable();
$(`.square`).droppable({
    accept: ".letter",
    drop: (event, ui) => {
        console.log("drop", event, ui);
    },
});
