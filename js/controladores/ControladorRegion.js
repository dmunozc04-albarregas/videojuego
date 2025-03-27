document.addEventListener("DOMContentLoaded", function() {
    const img = document.getElementById("imageMap");
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    function scaleMap() {
        if (!img.complete) return;

        const widthRatio = img.naturalWidth / img.width;
        const heightRatio = img.naturalHeight / img.height;

        document.querySelectorAll("area").forEach(area => {
            let newCoords = area.dataset.originalCoords.split(",").map((coord, index) =>
                index % 2 === 0 ? Math.round(coord / widthRatio) : Math.round(coord / heightRatio)
            );
            area.coords = newCoords.join(",");
        });
    }

    function adjustCanvasSize() {
        canvas.width = img.width;
        canvas.height = img.height;
        scaleMap();
    }

    function highlightRect(x, y, width, height) {
        clearCanvas();
        ctx.fillStyle = "rgba(255, 0, 0, 0.3)";
        ctx.fillRect(x, y, width, height);
    }

    function highlightPolygon(coords) {
        clearCanvas();
        let points = coords.split(",").map(Number);

        ctx.fillStyle = "rgba(0, 255, 0, 0.3)";
        ctx.beginPath();
        ctx.moveTo(points[0], points[1]);

        for (let i = 2; i < points.length; i += 2) {
            ctx.lineTo(points[i], points[i + 1]);
        }

        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "green";
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    // Guardar los coords originales
    document.querySelectorAll("area").forEach(area => {
        area.dataset.originalCoords = area.coords;
    });

    img.onload = () => {
        adjustCanvasSize();
    };

    window.addEventListener("resize", () => {
        adjustCanvasSize();
    });

    // Hacer funciones globales
    window.highlightRect = highlightRect;
    window.highlightPolygon = highlightPolygon;
    window.clearCanvas = clearCanvas;
});
