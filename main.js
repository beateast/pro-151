AFRAME.registerComponent("rotate_car", {
    schema: {moveX: {type: "number", default:0}},
    tick: function(){
        var pos = this.el.getAttribute("rotation")
        this.data.moveX = this.data.moveX +0.5
        pos.x = this.data.moveX
        this.el.setAttribute("rotation", {x: pos.x, y: pos.y, z: pos.z})
    }
})