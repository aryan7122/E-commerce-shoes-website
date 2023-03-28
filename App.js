let sortby_btn = document.getElementById('sortby_btn');
let shor_opt = document.getElementsByClassName('shor_opt')[0];

sortby_btn.addEventListener('click', () => {
    shor_opt.classList.toggle('shor_opt_active')
})

let newest = document.getElementById('newest');
let all_shoes = document.getElementById('all_shoes');
let low = document.getElementById('low');
let high = document.getElementById('high');

let url = "json.json";
let main_shoes_bx = document.getElementsByClassName('main_shoes_bx')[0];

fetch(url).then((Response => Response.json())).then((data) => {
    const all_shoes_array = [...data];
    const low_array = [...data];
    const high_array = [...data];
    const newest_array = [...data].splice(10,20);

    data.forEach((el, i) => {
        const {Img,Name,Category, MRP, Price, Tag, Color} = el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
         <img src="${Img}" alt="${Name}">
                    <h5 class="card_title" title="${Name}">${Name}</h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price}</h5>
                        <h5>MRP: <del>RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>`;
        
        main_shoes_bx.appendChild(card);
    });
    newest.addEventListener('click', () => {
        main_shoes_bx.innerHTML = "";
        sortby_btn.innerHTML = `
         <h5>Shory By: Newest</h5>
         <i class="bi bi-chevron-down"></i>`;
        shor_opt.classList.toggle('shor_opt_active');

        newest_array.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
         <img src="${Img}" alt="${Name}">
                    <h5 class="card_title" title="${Name}">${Name}</h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price}</h5>
                        <h5>MRP: <del>RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>`;

            main_shoes_bx.appendChild(card);
        });
    });

    all_shoes.addEventListener('click', () => {
        main_shoes_bx.innerHTML = "";
        sortby_btn.innerHTML = `
         <h5>Shory By: All Shoes</h5>
         <i class="bi bi-chevron-down"></i>`;
        shor_opt.classList.toggle('shor_opt_active');

        all_shoes_array.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
         <img src="${Img}" alt="${Name}">
                    <h5 class="card_title" title="${Name}">${Name}</h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price}</h5>
                        <h5>MRP: <del>RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>`;

            main_shoes_bx.appendChild(card);
        });
    });

    low.addEventListener('click', () => {
        main_shoes_bx.innerHTML = "";
        sortby_btn.innerHTML = `
         <h5>Shory By: Low</h5>
         <i class="bi bi-chevron-down"></i>`;
        shor_opt.classList.toggle('shor_opt_active');

        low_array.sort(({Price : a}, {Price : b}) => a-b)

        low_array.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
         <img src="${Img}" alt="${Name}">
                    <h5 class="card_title" title="${Name}">${Name}</h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price}</h5>
                        <h5>MRP: <del>RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>`;

            main_shoes_bx.appendChild(card);
        });
    });

    high.addEventListener('click', () => {
        main_shoes_bx.innerHTML = "";
        sortby_btn.innerHTML = `
         <h5>Shory By: High</h5>
         <i class="bi bi-chevron-down"></i>`;
        shor_opt.classList.toggle('shor_opt_active');

        high_array.sort(({ Price: a }, { Price: b }) => b - a)

        high_array.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
         <img src="${Img}" alt="${Name}">
                    <h5 class="card_title" title="${Name}">${Name}</h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price}</h5>
                        <h5>MRP: <del>RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>`;

            main_shoes_bx.appendChild(card);
        });

    });
    let boot_array = all_shoes_array.filter((el) => {
        return el.Type === 'Boots';
    })
    let All_Main_filter_array = [];

    let boots = document.getElementById('boots');
    let loafers = document.getElementById('loafers');
    let AirMax = document.getElementById('AirMax');

    boots.addEventListener('click', () => {
        if (boots.title === "boots_filter_on") {
            main_shoes_bx.innerHTML = "";
            boots.classList.toggle('i_active');
            boots.classList.toggle('bi-toggle2-off');
            boots.classList.toggle('bi-toggle2-on');
            boots.title = 'boots_filter_off';
            All_Main_filter_array = All_Main_filter_array.concat(boot_array);

            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color } = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
              <img src="${Img}" alt="${Name}">
                    <h5 class="card_title" title="${Name}">${Name}</h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price}</h5>
                        <h5>MRP: <del>RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>`;

                main_shoes_bx.appendChild(card);
            });
        } else {
            main_shoes_bx.innerHTML = "";
            boots.classList.toggle('i_active');
            boots.classList.toggle('bi-toggle2-off');
            boots.classList.toggle('bi-toggle2-on');
            boots.title = 'boots_filter_on';

            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return boot_array.indexOf(el) < 0;
            })
            all_shoes_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color } = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
              <img src="${Img}" alt="${Name}">
                    <h5 class="card_title" title="${Name}">${Name}</h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price}</h5>
                        <h5>MRP: <del>RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>`;

                main_shoes_bx.appendChild(card);
            });
        }
    })

    // loafer shoes

    let loafers_array = all_shoes_array.filter((el) => {
        return el.Type === 'Loafer';
    })

    loafers.addEventListener('click', () => {
        if (loafers.title === "loafers_filter_on") {
            main_shoes_bx.innerHTML = "";
            loafers.classList.toggle('i_active');
            loafers.classList.toggle('bi-toggle2-off');
            loafers.classList.toggle('bi-toggle2-on');
            loafers.title = 'loafers_filter_off';
            All_Main_filter_array = All_Main_filter_array.concat(loafers_array);

            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color } = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
              <img src="${Img}" alt="${Name}">
                    <h5 class="card_title" title="${Name}">${Name}</h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price}</h5>
                        <h5>MRP: <del>RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>`;

                main_shoes_bx.appendChild(card);
            });
        } else {
            main_shoes_bx.innerHTML = "";
            loafers.classList.toggle('i_active');
            loafers.classList.toggle('bi-toggle2-off');
            loafers.classList.toggle('bi-toggle2-on');
            loafers.title = 'loafers_filter_on';

            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return loafers_array.indexOf(el) < 0;
            })

            all_shoes_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color } = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
              <img src="${Img}" alt="${Name}">
                    <h5 class="card_title" title="${Name}">${Name}</h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price}</h5>
                        <h5>MRP: <del>RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>`;

                main_shoes_bx.appendChild(card);
            });
        }
    })

    // AirMax

    let AirMax_array = all_shoes_array.filter((el) => {
        return el.Type === 'Air Max';
    })

    AirMax.addEventListener('click', () => {
        if (AirMax.title === "AirMax_filter_on") {
            main_shoes_bx.innerHTML = "";
            AirMax.classList.toggle('i_active');
            AirMax.classList.toggle('bi-toggle2-off');
            AirMax.classList.toggle('bi-toggle2-on');
            AirMax.title = 'AirMax_filter_off';
            All_Main_filter_array = All_Main_filter_array.concat(AirMax_array);

            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color } = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
              <img src="${Img}" alt="${Name}">
                    <h5 class="card_title" title="${Name}">${Name}</h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price}</h5>
                        <h5>MRP: <del>RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>`;

                main_shoes_bx.appendChild(card);
            });
        } else {
            main_shoes_bx.innerHTML = "";
            AirMax.classList.toggle('i_active');
            AirMax.classList.toggle('bi-toggle2-off');
            AirMax.classList.toggle('bi-toggle2-on');
            AirMax.title = 'AirMax_filter_on';

            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return AirMax_array.indexOf(el) < 0;
            })

            all_shoes_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color } = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
              <img src="${Img}" alt="${Name}">
                    <h5 class="card_title" title="${Name}">${Name}</h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price}</h5>
                        <h5>MRP: <del>RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>`;

                main_shoes_bx.appendChild(card);
            });
        }
    })
    // price renge

    let right_input = document.getElementById('right_input');
    let left_input = document.getElementById('left_input');
    let left_input_icon = document.getElementById('left_input_icon');
    let right_input_icon = document.getElementById('right_input_icon');

    let array_1000_50000 = all_shoes_array.filter((el) => {
        return el.Price <= 50000;
    })
    left_input.addEventListener('click', () => {
        left_input_icon.style.left = left_input.value+'%'
        let price_box_value_left = (50000 / 100) * left_input.value;
        let array_1000_50000_left = array_1000_50000.filter((el) =>{
            return el.Price >= price_box_value_left;
        })
        let price_left = document.getElementById('price_left');
        price_left.innerHTML = price_box_value_left;
        main_shoes_bx.innerHTML = "";
        array_1000_50000_left.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
              <img src="${Img}" alt="${Name}">
                    <h5 class="card_title" title="${Name}">${Name}</h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price}</h5>
                        <h5>MRP: <del>RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>`;

            main_shoes_bx.appendChild(card);
        });
    })

    let array_50000_100000 = all_shoes_array.filter((el) => {
        return el.Price >= 50000;
    })
    right_input.addEventListener('click', () => {
        right_input_icon.style.left = right_input.value + '%'
        let price_box_value_right = (100000 / 100) * right_input.value;
        let array_50000_100000_right = array_50000_100000.filter((el) => {
            return el.Price >= price_box_value_right;
        })
        let price_right = document.getElementById('price_right');
        price_right.innerHTML = price_box_value_right;

        main_shoes_bx.innerHTML = "";

        array_50000_100000_right.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
              <img src="${Img}" alt="${Name}">
                    <h5 class="card_title" title="${Name}">${Name}</h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price}</h5>
                        <h5>MRP: <del>RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>`;

            main_shoes_bx.appendChild(card);
        });

        const color = ['white', 'gra-white', 'yellow', 'yellow-black', 'orange', 'green', 'sky-blue', 'pink', 'red', 'blue', 'gray-black', 'brown', 'black'];
        Array.from(document.getElementsByClassName('color')).forEach((el, i) => {
            el.addEventListener('click', ()=>{
                const color_array = all_shoes_array.filter((el)=> {
                    return el.ColorTag === color[i];
                });
                main_shoes_bx.innerHTML = "";
                color.forEach((el, i) => {
                    const { Img, Name, Category, MRP, Price, Tag, Color } = el;
                    let card = document.createElement('a');
                    card.classList.add('card');
                    card.innerHTML = `
                 <img src="${Img}" alt="${Name}">
                    <h5 class="card_title" title="${Name}">${Name}</h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price}</h5>
                        <h5>MRP: <del>RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>`;

                    main_shoes_bx.appendChild(card);
                });
            })
        })
    })
})
