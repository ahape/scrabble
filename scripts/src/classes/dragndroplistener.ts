import { ISquare } from "scrabblecore";

export class DragNDropListener {
    private _isListening: boolean = false;
    private _dragged: HTMLElement | null = null;

    private _onDragStart(event: Event): any {
        // store a ref of the dragged elem
        this._dragged = event.target as HTMLElement;
    }

    private _onDragEnd(event: Event): any {}

    private _onDragEnter(event: Event): any {
        const $target = $(event.target!) as JQuery<HTMLElement>;

        // highlight potential drop target when the draggable element enters it
        if ($target.hasClass("square")) {
            $target.addClass("drop-target");
        }
    }

    private _onDragLeave(event: Event): any {
        const $target = $(event.target!) as JQuery<HTMLElement>;

        // reset background of potential drop target when the draggable element leaves it
        if ($target.hasClass("square")) {
            $target.removeClass("drop-target");
        }
    }

    private _onDragOver(event: Event): any {
        // prevent default to allow drop
        event.preventDefault();
    }

    private _onDrop(event: Event): any {
        // prevent default action (open as link for some elements)
        event.preventDefault();

        const $target = $(event.target!) as JQuery<HTMLElement>;
        const sq = ko.dataFor(event.target as HTMLElement) as ISquare;
        //
        // move dragged elem to the selected drop target
        //
        if (
            this._dragged &&
            $target.hasClass("square") &&
            $target.children().length == 0 &&
            !sq.played
        ) {
            this._dragged.parentNode!.removeChild(this._dragged);
            $target.append(this._dragged);
        }

        $target.removeClass("drop-target");
    }

    public init(): void {
        document.addEventListener("dragstart", this._onDragStart, false);
        document.addEventListener("dragend", this._onDragEnd, false);
        document.addEventListener("dragenter", this._onDragEnter, false);
        document.addEventListener("dragleave", this._onDragLeave, false);
        document.addEventListener("dragover", this._onDragOver, false);
        document.addEventListener("drop", this._onDrop, false);

        this._isListening = true;
    }

    public dispose(): void {
        if (!this._isListening) return;

        document.removeEventListener("dragstart", this._onDragStart);
        document.removeEventListener("dragend", this._onDragEnd);
        document.removeEventListener("dragenter", this._onDragEnter);
        document.removeEventListener("dragleave", this._onDragLeave);
        document.removeEventListener("dragover", this._onDragOver);
        document.removeEventListener("drop", this._onDrop);

        this._isListening = false;
    }
}
