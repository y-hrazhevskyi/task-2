function start() {
    circle();
    paralelepiped();
    ellipse();
    square();
    rectangle();
    right_triangle()
}
function paralelepiped() {
    var paralelepiped = document.getElementById("paralelepiped");

    a = document.getElementById("paralelepiped_a").value;
    b = document.getElementById("paralelepiped_b").value;
    angle = document.getElementById("paralelepiped_angle").value;

    paralelepiped.style.height = (a * 37.936267) / 10 + "px";
    paralelepiped.style.width = (b * 37.936267) / 10 + "px";
    paralelepiped.style.transform = "skew(" + angle * -1 + "deg)";

    document.getElementById("paralelepiped_area").value = (a * b * Math.sin(angle * Math.PI / 180)).toFixed(3);
    document.getElementById("paralelepiped_h").value = (document.getElementById("paralelepiped_area").value / a).toFixed(3);
}

function circle() {
    var circle = document.getElementById("circle");

    r = document.getElementById("circle_r").value;

    circle.style.height = ((r * 2) * 37.936267) / 10 + "px";
    circle.style.width = ((r * 2) * 37.936267) / 10 + "px";

    document.getElementById("circle_area").value = (Math.PI * Math.pow(r, 2)).toFixed(3);
    document.getElementById("circle_l").value = (2 * Math.PI * r).toFixed(3);
}

function ellipse() {
    var ellipse = document.getElementById("ellipse");

    ellipse_hr = document.getElementById("ellipse_hr").value;
    ellipse_vr = document.getElementById("ellipse_vr").value;

    ellipse.style.height = ((ellipse_vr * 2) * 37.936267) / 10 + "px";
    ellipse.style.width = ((ellipse_hr * 2) * 37.936267) / 10 + "px";

    document.getElementById("ellipse_area").value = (Math.PI * ellipse_hr * ellipse_vr).toFixed(3);

    //2π * sqrt( (a2 + b2) / 2 )
    document.getElementById("ellipse_l").value = (2 * 3.14 * Math.sqrt((ellipse_vr * ellipse_vr + ellipse_hr * ellipse_hr) / (2 * 1.0))).toFixed(3)
}

function square() {
    var square = document.getElementById("square");

    a = document.getElementById("square_a").value;

    square.style.height = (a * 37.936267) / 10 + "px";
    square.style.width = (a * 37.936267) / 10 + "px";

    document.getElementById("square_diag").value = (Math.sqrt(2) * a).toFixed(3);
    document.getElementById("square_area").value = (Math.pow(a, 2)).toFixed(3);
}

function rectangle() {
    var rectangle = document.getElementById("rectangle");

    a = document.getElementById("rectangle_a").value;
    b = document.getElementById("rectangle_b").value;

    rectangle.style.height = (a * 37.936267) / 10 + "px";
    rectangle.style.width = (b * 37.936267) / 10 + "px";

    document.getElementById("rectangle_diag").value = (Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))).toFixed(3);
    document.getElementById("rectangle_area").value = (a * b).toFixed(3);
}

function right_triangle() {
    var right_triangle = document.getElementById("right_triangle");

    a = document.getElementById("right_triangle_a").value;
    b = document.getElementById("right_triangle_b").value;
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    right_triangle.style.borderBottom = (a * 37.936267) / 10 + "px" + " solid grey";
    right_triangle.style.borderRight = (b * 37.936267) / 10 + "px" + " solid transparent";

    document.getElementById("right_triangle_c").value = c.toFixed(3);
    document.getElementById("right_triangle_area").value = ((a * b) / 2).toFixed(3);
    document.getElementById("right_triangle_cut_a").value = (Math.asin(a / c) * 180 / Math.PI).toFixed(3) + "°";
    document.getElementById("right_triangle_cut_b").value = (Math.asin(b / c) * 180 / Math.PI).toFixed(3) + "°";
    document.getElementById("right_triangle_cut_c").value = 90 + "°";
    document.getElementById("right_triangle_h").value = ((a * b) / c).toFixed(3);
}

function Momental() {
    start();
    const inputs_arr = document.getElementsByTagName('input');
    checkBox = document.getElementById("momental");

    if (checkBox.checked) {
        for (i = 0; i < inputs_arr.length; i++) {
            inputs_arr[i].setAttribute("onkeyup", "start()")
        }
    }
    else {
        for (i = 0; i < inputs_arr.length; i++) {
            inputs_arr[i].setAttribute("onkeyup", "")
        }
    }
}