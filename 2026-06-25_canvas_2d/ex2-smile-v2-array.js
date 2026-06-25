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

    const commands = [
        {
            color: "#eee400",
            position: { x: px(PX_OFFSET_X + 2), y: px(PX_OFFSET_Y + 0) },
            size: { w: px(6), h: px(10) },
        },
        {
            color: "#eee400",
            position: { x: px(PX_OFFSET_X + 1), y: px(PX_OFFSET_Y + 1) },
            size: { w: px(8), h: px(8) },
        },
        {
            color: "#eee400",
            position: { x: px(PX_OFFSET_X + 0), y: px(PX_OFFSET_Y + 2) },
            size: { w: px(10), h: px(6) },
        },
        {
            color: "#ffff00",
            position: { x: px(PX_OFFSET_X + 2), y: px(PX_OFFSET_Y + 1) },
            size: { w: px(6), h: px(8) },
        },
        {
            color: "#ffff00",
            position: { x: px(PX_OFFSET_X + 1), y: px(PX_OFFSET_Y + 2) },
            size: { w: px(8), h: px(6) },
        },
        {
            color: "#000000",
            position: { x: px(PX_OFFSET_X + 0), y: px(PX_OFFSET_Y + 3) },
            size: { w: px(10), h: px(1) },
        },
        {
            color: "#000000",
            position: { x: px(PX_OFFSET_X + 2), y: px(PX_OFFSET_Y + 4) },
            size: { w: px(2), h: px(1) },
        },
        {
            color: "#000000",
            position: { x: px(PX_OFFSET_X + 6), y: px(PX_OFFSET_Y + 4) },
            size: { w: px(2), h: px(1) },
        },
        {
            color: "#000000",
            position: { x: px(PX_OFFSET_X + 2), y: px(PX_OFFSET_Y + 6) },
            size: { w: px(1), h: px(1) },
        },
        {
            color: "#000000",
            position: { x: px(PX_OFFSET_X + 7), y: px(PX_OFFSET_Y + 6) },
            size: { w: px(1), h: px(1) },
        },
        {
            color: "#000000",
            position: { x: px(PX_OFFSET_X + 3), y: px(PX_OFFSET_Y + 7) },
            size: { w: px(4), h: px(1) },
        }
    ]
    
    for (let command of commands)
    {
        ctx.fillStyle = command.color;
        ctx.fillRect(
            command.position.x, command.position.y,
            command.size.w, command.size.h
        );
    }
});