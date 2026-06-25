"use strict";


document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    // ctx - общепринятое сокращение для context
    // (0, 0) - верхний левый угол.
    // Ось Y направлена вниз.
    // Ось X направлена вправо.
    // У canvas изначально фон прозрачный (белый - это фон
    // документа проглядыввает)

    // fill - заполнить/залить
    // rect - прямоугольник (rectangle)
    // (x, y, ширина, высота)
    ctx.fillRect(20, 30, 100, 100);

    // fillStyle - "взять" в руку карандаш нужного
    // цвета (и он остаётся в "руке" до следующей
    // команды смены цвета)
    ctx.fillStyle = "#10af63";
    ctx.fillRect(120, 130, 80, 80);

    // Рисуем прямоугольную рамку
    ctx.strokeStyle = "red";
    ctx.strokeRect(10, 10, canvas.width - 2*10, canvas.height - 2*10);

    // Отрисовка текста
    // Точка (40, 400) будет центром надписи "Привет, world!",
    // так как атрибут textAlign выставлен в "center"
    ctx.font = "bold 30px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Привет, world!", 40, 400);

    // Маленький красный кружок-точка
    ctx.beginPath(); // Начало пути отрисовки
    ctx.fillStyle = "red";
    // 40, 400 - координаты центра окружности
    // 3 - радиус
    // 0.0, Math.PI * 2.0 - стартовый и конечный
    // угол дуги окружности (в радианах)
    ctx.arc(40, 400, 3, 0.0, Math.PI * 2.0);
    ctx.fill();  // Конец пути отрисовки: заливка окружности

    // Окружность
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 6;  // Толщина обводки
    ctx.arc(40, 400, 20, 0.0, Math.PI * 2.0);
    ctx.stroke();  // Конец пути отрисовки: отрисовка обводки
});