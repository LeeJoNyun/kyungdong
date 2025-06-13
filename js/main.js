//비주얼배너
const mainBanner = () => {};

const eventBanner = () => {};
const sectionPage1 = () => {};

const sectionPage = () => {
    const $con0 = get('#mainVisual');
    const $cons = getAll('.main .con');
    // console.log($cons[0].offsetTop);

    const posY = [];
    posY.push($con0.offsetTop);
    $cons.forEach((item) => {
        posY.push(item.offsetTop);
    });
    // console.log(posY);

    const $menulis = getAll('.menu li');
    $menulis.forEach((itemLi, idx) => {
        itemLi.addEventListener('click', (e) => {
            window.scrollTo({ top: posY[idx], behavior: 'smooth' });
            // 모두떼기 -> forEach
            $menulis.forEach((item) => item.classList.remove('on'));
            itemLi.classList.add('on');
        });
    });
};

const menuBar = () => {
    const $menu = get('.menu');

    const $con0 = get('#mainVisual');
    const $cons = getAll('.main .con');

    const posY = [];
    posY.push($con0.offsetTop);
    $cons.forEach((item) => {
        posY.push(item.offsetTop);
    });
    let ty = 0;

    const $menulis = getAll('.menu li');
    $menulis.forEach((itemLi, idx) => {
        itemLi.addEventListener('click', (e) => {
            window.scrollTo({ top: posY[idx], behavior: 'smooth' });
            // 모두떼기 -> forEach
            // $menulis.forEach((item) => item.classList.remove('on'));
            // itemLi.classList.add('on');
        });
    });
    window.addEventListener('scroll', (e) => {
        ty = window.scrollY;
        for (let i = 0; i < $menulis.length; i++) {
            if (ty >= posY[i]) {
                $menulis.forEach((item) => item.classList.remove('on'));
                $menulis[i].classList.add('on');
            }
        }
        /*
        if (ty >= posY[0]) {
            $menulis.forEach((item) => item.classList.remove('on'));
            $menulis[0].classList.add('on');
        }
        if (ty >= posY[1]) {
            $menulis.forEach((item) => item.classList.remove('on'));
            $menulis[1].classList.add('on');
        }
        if (ty >= posY[2]) {
            $menulis.forEach((item) => item.classList.remove('on'));
            $menulis[2].classList.add('on');
        }
        if (ty >= posY[3]) {
            $menulis.forEach((item) => item.classList.remove('on'));
            $menulis[3].classList.add('on');
        }
        if (ty >= posY[4]) {
            $menulis.forEach((item) => item.classList.remove('on'));
            $menulis[4].classList.add('on');
        }
            */

        if (ty > 400) {
            $menu.classList.add('on');
        } else {
            $menu.classList.remove('on');
        }
    });
};

//합치기
const mainInit = () => {
    mainBanner();
    eventBanner();
    menuBar();
    // sectionPage();
};

(() => {
    mainInit();
})();
