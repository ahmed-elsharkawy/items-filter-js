let itemData = [
    {
        url: 'imgs/w1.jpg',
        class: 'car'
    },
    {
        url: 'imgs/a1.jpg',
        class: 'plane'
    },
    {
        url: 'imgs/n1.jpg',
        class: 'nature'
    },
    {
        url: 'imgs/c1.jpg',
        class: 'city'
    },
    {
        url: 'imgs/w2.jpg',
        class: 'car'
    },
    {
        url: 'imgs/a2.jpg',
        class: 'plane'
    },
    {
        url: 'imgs/n2.jpg',
        class: 'nature'
    },
    {
        url: 'imgs/c2.jpg',
        class: 'city'
    },
    {
        url: 'imgs/w3.jpg',
        class: 'car'
    },
    {
        url: 'imgs/a3.jpg',
        class: 'plane'
    },
    {
        url: 'imgs/n3.jpg',
        class: 'nature'
    },
    {
        url: 'imgs/c3.jpg',
        class: 'city'
    },
    {
        url: 'imgs/w4.jpg',
        class: 'car'
    },
    {
        url: 'imgs/a4.jpg',
        class: 'plane'
    },
    {
        url: 'imgs/n4.jpg',
        class: 'nature'
    },
    {
        url: 'imgs/c4.jpg',
        class: 'city'
    },
    {
        url: 'imgs/w5.jpg',
        class: 'car'
    },
    {
        url: 'imgs/n5.jpg',
        class: 'nature'
    },
    {
        url: 'imgs/c5.jpg',
        class: 'city'
    },
    {
        url: 'imgs/n6.jpg',
        class: 'nature'
    },
    {
        url: 'imgs/c6.jpg',
        class: 'city'
    },
    {
        url: 'imgs/c7.jpg',
        class: 'city'
    }
]
function displayItems(type){
    let container= '';
    let selectedItem = [];
    if(type == 'all'){
        selectedItem = itemData;
    }else{
        for(let i=0; i<itemData.length; i++){
            if(itemData[i].class == type){
                selectedItem.push(itemData[i]);
            }
        }
    }
    for(let y=0; y<selectedItem.length; y++){
        container +=
            `
                <div class="col-md-3 col-sm-4 mb-4 car all-item ${selectedItem[y].class}">
                    <div class="our-work-item color1 p-1">
                        <div class="image">
                            <img class="img-fluid" src="${selectedItem[y].url}" alt="">
                        </div>
                        <div class="button text-center d-flex align-items-center justify-content-center ">
                            <button class="btn btn-warning">Add to chart</button>
                        </div>
                    </div>
                </div>

            `
    }
    itemsContainer.innerHTML = container;
}
displayItems('all');