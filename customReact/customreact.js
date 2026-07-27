function customRender(reactElement,container){
    // const domElement = document.createElement(reactElement.type)//yaha per ek angular tag bana hai jo domelement me hai usko point kar raha
    // domElement.innerHTML = reactElement.Children //yaha angular ya a ke andar ye likh rahe jo domelement me hai niche
    // domElement.setAttribute('href',reactElement.props.href)//aur yaha a ke andar href me niche domelement me se value nikal kar de raha hai
    // domElement.setAttribute('target',reactElement.props.target)//aur yaha a ke andar target me niche domelement me se value nikal kar de raha hai

    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    for (const prop in reactElement.props) { //prop me href fir target aayga
        if(prop === 'Children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'Click me to visit google'
}


const maincontainer = document.querySelector('#root')

customRender(reactElement,maincontainer)
