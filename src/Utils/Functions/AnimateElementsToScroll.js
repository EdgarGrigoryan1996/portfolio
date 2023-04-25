
function animateElementsToScroll(scrollTop,setScrollTop,elementRef,showAnimation,hideAnimation,hideVisibility){
    setScrollTop(window.scrollY);
    if(scrollTop > elementRef.current.offsetTop - 500){
        elementRef.current.classList.remove(hideAnimation);
        elementRef.current.classList.add('animate__animated',showAnimation,hideVisibility);
    } else {
        elementRef.current.classList.remove(showAnimation);
        elementRef.current.classList.add(hideAnimation);
    }
}

export default animateElementsToScroll