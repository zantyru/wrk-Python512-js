"use strict";


document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    // Рисунок смайла из https://www.nicepng.com/png/full/807-8072470_this-free-icons-png-design-of-smileys-symbols.png
    
    const PIXEL_SIZE = 30;

    function px(n)
    {
        return n * PIXEL_SIZE;
    }

    const PX_OFFSET_X = 1;
    const PX_OFFSET_Y = 1;

    ctx.fillStyle = "#eee400";    
    ctx.fillRect(
        px(PX_OFFSET_X + 2), px(PX_OFFSET_Y + 0),
        px(6), px(10)
    );
    ctx.fillRect(
        px(PX_OFFSET_X + 1), px(PX_OFFSET_Y + 1),
        px(8), px(8)
    );
    ctx.fillRect(
        px(PX_OFFSET_X + 0), px(PX_OFFSET_Y + 2),
        px(10), px(6)
    );

    ctx.fillStyle = "#ffff00"; 
    ctx.fillRect(
        px(PX_OFFSET_X + 2), px(PX_OFFSET_Y + 1),
        px(6), px(8)
    );
    ctx.fillRect(
        px(PX_OFFSET_X + 1), px(PX_OFFSET_Y + 2),
        px(8), px(6)
    );

    ctx.fillStyle = "#000000"; 
    ctx.fillRect(
        px(PX_OFFSET_X + 0), px(PX_OFFSET_Y + 3),
        px(10), px(1)
    );
    ctx.fillRect(
        px(PX_OFFSET_X + 2), px(PX_OFFSET_Y + 4),
        px(2), px(1)
    );
    ctx.fillRect(
        px(PX_OFFSET_X + 6), px(PX_OFFSET_Y + 4),
        px(2), px(1)
    );
    ctx.fillRect(
        px(PX_OFFSET_X + 2), px(PX_OFFSET_Y + 6),
        px(1), px(1)
    );
    ctx.fillRect(
        px(PX_OFFSET_X + 7), px(PX_OFFSET_Y + 6),
        px(1), px(1)
    );
    ctx.fillRect(
        px(PX_OFFSET_X + 3), px(PX_OFFSET_Y + 7),
        px(4), px(1)
    );
});