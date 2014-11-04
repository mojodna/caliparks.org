define([ "require", "exports", "module", "jquery", "content-carousel", "stamen-super-classy" ], function(require, exports, module) {
    var StamenSuperClassy = require("stamen-super-classy"), ContentCarousel = require("content-carousel");
    module.exports = function(rootSelector) {
        var that = this, backButtonSelector = ".carousel-back-button", forwardButtonSelector = ".carousel-forward-button";
        StamenSuperClassy.apply(this, arguments);
        var rootNode = that.get(rootSelector)[0], backButtonNode = that.get(backButtonSelector, rootNode)[0], forwardButtonNode = that.get(forwardButtonSelector, rootNode)[0];
        return rootNode ? (that.carouselInstance = new ContentCarousel(rootSelector + " .slide-container", {
            slideClass: "coverphoto",
            snapToSlide: !0,
            showLoader: !0
        }), backButtonNode.addEventListener("click", function() {
            that.carouselInstance.goBackward();
        }, !1), forwardButtonNode.addEventListener("click", function() {
            that.carouselInstance.goForward();
        }, !1), that.carouselInstance.on("forward", function(e) {
            e.caller.target.scrollLeft > e.caller.target.scrollWidth - (e.caller.target.offsetWidth + e.caller.target.offsetWidth / 2) ? rootNode.parentNode.parentNode.classList.add("scrolled-furthest") : rootNode.parentNode.parentNode.classList.remove("scrolled-furthest"), 
            e.caller.target.scrollLeft < e.caller.target.offsetWidth / 2 ? rootNode.parentNode.parentNode.classList.add("not-scrolled") : rootNode.parentNode.parentNode.classList.remove("not-scrolled");
        }), that.carouselInstance.on("backward", function(e) {
            e.caller.target.scrollLeft > e.caller.target.scrollWidth - (e.caller.target.offsetWidth + e.caller.target.offsetWidth / 2) ? rootNode.parentNode.parentNode.classList.add("scrolled-furthest") : rootNode.parentNode.parentNode.classList.remove("scrolled-furthest"), 
            e.caller.target.scrollLeft < e.caller.target.offsetWidth / 2 ? rootNode.parentNode.parentNode.classList.add("not-scrolled") : rootNode.parentNode.parentNode.classList.remove("not-scrolled");
        }), that) : null;
    };
});