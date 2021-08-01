interface Props {
    /** CSS class for drop-target */
    dropzone?: string;
    /** CSS class for draggable item */
    handle?: string;
    /** CSS class for hovering over a dropzone with item */
    dropzoneHover?: string;
    /** 
     * -> DragData: continue w/ drop
     * -> true: skip to post-drop cleanup
     * -> false: cancel drop
     */
    beforeDrop?: (dragData: DragData) => DragData | boolean;
}

export namespace TouchAndDropListener {
    export interface DragData {
        dragged: HTMLElement;
        original: HTMLElement;
        dropzone: HTMLElement;
        viewportX: number;
        viewportY: number;
    }

    export interface DropzoneCssLogic {
        class: string;
        hoverClass: string;
        lastDropzoneHovered: Element | null;
        hover(this: DropzoneCssLogic, el: Element | null): void;
    }
}

type DragData = TouchAndDropListener.DragData;
type DropzoneCssLogic = TouchAndDropListener.DropzoneCssLogic;

const draggingClass = "dragging";
const originalClass = "original";
const dropzoneClass = "dropzone";
const dropzoneHoverClass = "dropzone-hover";
const dragHandleClass = "draggable";

export class TouchAndDropListener {
    private _beforeDrop?: (dragData: DragData) => DragData | boolean;
    private _width: number = 0;
    private _height: number = 0;
    /** This is the element being dragged. It is a clone of orig el.*/
    private _dragged: HTMLElement | null = null;
    /** This is the original element. We clone it for the drag el. */
    private _original: HTMLElement | null = null;
    private _originalClass = originalClass; // Opacity dimming
    private _draggingClass = draggingClass; // Strictly for abs pos'ing.
    private _dragHandleClass: string;
    private _dropzone: DropzoneCssLogic = {
        class: "",
        hoverClass: "",
        lastDropzoneHovered: null,
        hover(el) {
            const cached = this.lastDropzoneHovered;
            if (el != cached) {
                if (cached) cached.classList.remove(this.hoverClass);
                if (el) el.classList.add(this.hoverClass);
                this.lastDropzoneHovered = el;
            }
        },
    };

    constructor(props: Props) {
        this._dropzone.class = props.dropzone ?? dropzoneClass;
        this._dropzone.hoverClass = props.dropzoneHover ?? 
            dropzoneHoverClass;
        this._dragHandleClass = props.handle ?? dragHandleClass;
        this._beforeDrop = props.beforeDrop;
    }

    public init() {
        document.body.addEventListener(
            "mousedown", this._listenToMouseDown, false);
        document.body.addEventListener(
            "mouseup", this._listenToMouseUp, false);
        document.body.addEventListener(
            "mousemove", this._listenToMouseMove, false);
        document.body.addEventListener(
            "touchstart", this._listenToTouchStart, false);
        document.body.addEventListener(
            "touchend", this._listenToTouchEnd, false);
        document.body.addEventListener(
            "touchmove", this._listenToTouchMove, false);

        this._injectNecessaryCss();
    }

    public elementUnderDragged(
        viewportX: number, 
        viewportY: number, 
        dragged: HTMLElement): Element | null 
    {
        // If we were to call `elementFromPoint` right now, we'd 
        // get back the el we are dragging, which is undesired.
        // In order to avoid this, we have to temporarily hide the dragged el

        const previousDisplay = getComputedStyle(dragged).display;

        dragged.style.display = "none";

        const el = document.elementFromPoint(
            viewportX + this._width / 2,
            viewportY + this._height / 2);

        dragged.style.display = previousDisplay;

        return el;
    }

    private _px(n: number, isY: boolean = false) {
        // We offset the coords to make it look like the user
        // is grabbing the element by the middle instead of top/left.
        return n - (isY ? this._height : this._width) / 2 + "px";
    }

    /** Returns el or first el that meets dropzone criteria */
    private _getParentDropzone(el: Element | null): Element | null {
        while (el) {
            if (el.classList.contains(this._dropzone.class)) {
                return el;
            }
            el = el.parentElement;
        }
        return null;
    }

    private _injectNecessaryCss() {
        const styleEl = document.createElement("style");
        document.head.appendChild(styleEl);
        styleEl.sheet!.insertRule(`.${draggingClass} {
            position: absolute;
            cursor: move;
            cursor: grabbing;
        }`);
        styleEl.sheet!.insertRule(`.${this._dragHandleClass} {
            cursor: pointer;
            cursor: grab;
            user-select: none;
            touch-action: none;
        }`);
        styleEl.sheet!.insertRule(`.${originalClass}{opacity:0.35}`);
    }


    private _startDragging(el: HTMLElement, x: number, y: number) {
        const rect = el.getBoundingClientRect();
        this._width = rect.width;
        this._height = rect.height;
        this._original = el;
        this._dragged = el.cloneNode(true) as HTMLElement;

        this._dragged.style.top = this._px(y, true);
        this._dragged.style.left = this._px(x);
        this._dragged.classList.add(this._draggingClass);

        this._original.classList.add(this._originalClass);

        document.body.appendChild(this._dragged);
    }

    private _stopDragging(dragged: HTMLElement, original: HTMLElement) {
        dragged.classList.remove(this._draggingClass);
            
            // If we didn't drop this anywhere
        if (dragged.parentElement === document.body)
            dragged.remove();

        original.classList.remove(this._originalClass);

        this._dropzone.hover(null);

        this._width = this._height = 0;
        this._original = this._dragged = null;
    }

    private _listenToMouseDown = (event: MouseEvent) => {
        const el = event.target as HTMLElement;

        if (el?.classList.contains(this._dragHandleClass)) {
            this._startDragging(el, event.pageX, event.pageY);
        }
    }

    private _listenToTouchStart = (event: TouchEvent) => {
        const el = event.target as HTMLElement;

        if (event.targetTouches.length === 1 &&
            el?.classList.contains(this._dragHandleClass)) 
        {
            const x = event.targetTouches[0].pageX;
            const y = event.targetTouches[0].pageY;
            this._startDragging(el, x, y);
        }
    }

    private _listenToMouseUp = (event: MouseEvent) => {
        if (this._dragged && this._original) {
            this._stopEventCommon(
                event.clientX, 
                event.clientY, 
                this._dragged, 
                this._original);
        }
    }

    private _listenToTouchEnd = (event: TouchEvent) => {
        if (this._dragged && this._original) {
            const [vx, vy] = [
                event.changedTouches[0].clientX,
                event.changedTouches[0].clientY
            ];

            this._stopEventCommon(
                vx, vy, this._dragged, this._original);
        }
    }

    private _stopEventCommon(
        viewportX: number, 
        viewportY: number, 
        dragged: HTMLElement, 
        original: HTMLElement) 
    {
        const el = this.elementUnderDragged(viewportX, viewportY, dragged);

        if (el) {
            const dropzone = this._getParentDropzone(el as HTMLElement);

            if (dropzone) 
                this._doDrop(dropzone as HTMLElement, dragged, original, viewportX, viewportY);
        }

        this._stopDragging(dragged, original);
    }

    private _listenToMouseMove = (event: MouseEvent) => {
        if (this._dragged) {
            this._moveEventCommon(
                event.pageX,
                event.pageY,
                event.clientX, 
                event.clientY,
                this._dragged);
        }
    }

    private _listenToTouchMove = (event: TouchEvent) => {
        if (this._dragged) {
            const [x, y] = [
                event.targetTouches[0].pageX,
                event.targetTouches[0].pageY
            ];
            const [vx, vy] = [
                event.targetTouches[0].clientX,
                event.targetTouches[0].clientY
            ];

            this._moveEventCommon(x, y, vx, vy, this._dragged);
        }
    }

    private _moveEventCommon(
        x: number,
        y: number,
        viewportX: number,
        viewportY: number,
        dragged: HTMLElement) 
    {
        dragged.style.top = this._px(y, true);
        dragged.style.left = this._px(x);

        const el = this.elementUnderDragged(viewportX, viewportY, dragged);

        this._dropzone.hover(this._getParentDropzone(el));
    }

    private _doDrop(
        dropzone: HTMLElement, 
        dragged: HTMLElement, 
        original: HTMLElement,
        viewportX: number,
        viewportY: number) 
    {
        let data: DragData | boolean = { 
            dragged, original, dropzone, viewportX, viewportY,
        };
        if (this._beforeDrop) {
            data = this._beforeDrop(data);
        }
        // If data is object, then preprocessing didn't perform drop
        if (typeof data === "object") {
            dropzone.appendChild(dragged);
        }
        // If data is object or true, perform post-drop cleanup
        if (data) original.remove();
    }
}
