import './Impact.css';

const impacts = [
    {
        id: 1,
        title: 'Trash removal costs can be exorbitantly expensive, especially in dense cities or remote areas. By removing paper, plastic and other recyclables from the waste stream, parks can cut their waste disposal bill by as much as 50 percent. Of course, every facility’s cost will differ, and there is always a cost involved in recycling collection. However, the price paid for recycling collection is often recouped by the savings of having less waste collected by your waste hauler.',
        image: 'https://img.freepik.com/free-vector/caucasian-woman-with-recycle-bin-trash-can_107173-8225.jpg?size=338&ext=jpg'
    },
    {
        id: 2,
        title: 'In a study performed by Waste Wise, they point out that “Recycling is an important segment of the national and state economy, creates jobs and saves money for generators of waste. The businesses, institutions, and local government entities highlighted in this report all understand that recycling makes both environmental sense and economic sense”.',
        image: 'https://us.123rf.com/450wm/macrovector/macrovector1605/macrovector160500720/56988593-color-flat-concept-showing-garbage-collection-and-waste-processing-vector-illustration.jpg?ver=6'
    },
    {
        id: 3,
        title: 'Many recyclable materials are valuable enough to sell and be reused. This not only promotes a circular economy but also creates a potential for cost savings from your recycling hauler.',
        image: 'https://st2.depositphotos.com/1829203/10432/v/600/depositphotos_104324690-stock-illustration-circular-economy-illustration.jpg'
    },
    {
        id: 4,
        title: 'Providing more options and communicating a clear waste management system encourages guests to refrain from leaving trash and litter in places they don’t belong. Not only can this improve the aesthetics and clean environment of your park, attracting and pleasing more guests, but it can also reduce the cost of janitorial or maintenance staff.',
        image: 'https://img.freepik.com/free-vector/city-summer-park-with-green-trees-bench-walkway-lantern-town-city-park-landscape-nature-cartoon-vector-illustration_53562-5890.jpg?size=626&ext=jpg'
    }
]

export default function Impact() {
    return (
        <>
        <div id="impacts">
            <h1>IMPACTS</h1>
            <main>
                {
                    // [1,2,3,4,5,6].map((el, i) => {
                    //     return (
                    //         <section className="row">
                    //             <div className="cover_img">
                    //                 <img src={img} alt="sg1"></img>
                    //             </div>
                    //             <p>Do cillum cillum veniam consectetur. Mollit et adipisicing nulla aute occaecat do. Sed ut perspiciatis unde omnis iste natus error sit voluptatm, totam. Commodo culpa veniam occaecat occaecat magna et officia ea incididunt laborum nostrud eu consequat aliqua. In sunt anim occaecat amet in exercitation id tempor est consectetur amet. Tempor velit elit ut adipisicing elit velit. Ea mollit magna magna incididunt eiusmod.</p>
                    //         </section>
                    //     )
                    // })
                    impacts.map((impact) => (
                        <section className="row" key={impact.id}>
                            <div className="cover_img">
                                <img src={impact.image} alt="sg1"></img>
                            </div>
                            <p>{impact.title}</p>
                        </section>
                    ))
                }
            </main>
        </div>
        </>
    )
}