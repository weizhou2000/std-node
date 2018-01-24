class Circle {
        constructor(radius) {
            this.radius = radius;
            Circle.circlesMade++;  // ----->> className=self
        };
        static draw(circle, canvas) { //---->> classMethod=static
            // Canvas绘制代码
            console.log('class method')
        };
        static get circlesMade() {
            return !this._count ? 0 : this._count;
        };
        static set circlesMade(val) { //------>> class Setter=static set
            this._count = val;
        };
        area() {
            return Math.pow(this.radius, 2) * Math.PI;
        };
        get radius() {
            return this._radius;
        };
        set radius(radius) {
            if (!Number.isInteger(radius))
                throw new Error("圆的半径必须为整数。");
            this._radius = radius;
        };
}

let p=new Circle(2)
console.log(p.radius)
console.log(Circle.circlesMade)
//console.log(
Circle.draw()
Circle.circlesMade=2
console.log(Circle.circlesMade)
console.log(p.area())
p.radius=1
console.log(p.area())


