// import 'boxicons'
function Listening() {
    let circle = document.querySelector('.color-option');
// console.log(circle.target)

    circle.addEventListener('click', function(e) {
    let target = e.target;
    // console.log(target.classList.value);
    // here search the element inside the element that has the class color-option
    if (target.classList.contains('circle')) {
        circle.querySelector('.active').classList.remove('active');
        target.classList.add('active');
        let pics = document.querySelector('.main-images');
        pics.querySelector('.active').classList.remove('active');
        pics.querySelector('.pics.' + target.id).classList.add('active');
        // value_target = target.classList.value
        // console.log(value_target.split(' '));
        console.log('.pics.' + target.id);
    }
});

};
export default Listening;
// console.log(circle.tagName);
// circle.addEventListener('click', function() {
//   circle.classList.toggle('active');
// } );

