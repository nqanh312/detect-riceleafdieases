export const diseaseColumns = [
    { field: "id", headerName: "No.", width: 50 },
    {
        field: "disease",
        headerName: "Disease",
        width: 200,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
                    {params.row.disease}
                </div>
            );
        },
    },
    {
        field: "symptom",
        headerName: "Symptom",
        width: 270,
    },

    {
        field: "treatment",
        headerName: "Treatment",
        width: 250,
    },

    {
        field: "prevention",
        headerName: "Prevention",
        width: 230,
    },



];

//temporary data
export const diseaseRows = [
    {
        id: 1,
        disease: "Bệnh Bạc lá (Bacterial Blight)",
        symptom: "Rice blight appears at the leaf edge, rice plants show signs of burning along the leaf edge from the tip of the leaf to burning down (also known as leaf blight disease).In the afternoon, drops of dried leaf blight bacteria are deposited on the edges of yellow leaves, the size is as small as shrimp eggs.At night dew, these bacterial glue drops melt, run along the edge of the leaves and the wind causes the scratches to spread to other leaves.Severe disease causes the rice leaves to be burned, especially the leaves of the mango tree, causing the rice to be suspended at a high rate, severely reducing the yield.",
        treatment: "When detecting infected rice plants, it is necessary to keep the field water 3-5 cm, stop applying all kinds of chemical fertilizers, foliar fertilizers and growth stimulants.When the disease appeared on rice areas, farmers used drugs on the list of pesticides permitted for use in Vietnam containing the active ingredients Bismerthiazol, Copper hydroxide, Oxolinic acid, Thiodiazole zinc, Thiodiazole copper,... to spray. During the period of rice - flowering - ripening, people need to closely monitor the changes of the weather and spray before and after thunderstorms with pesticides containing the above-mentioned active ingredients according to the 4 correct principles and in the direction of: instructions for use on the packaging to prevent the disease from spreading on a large scale.",
        prevention: "Using rice varieties that are resistant to diseases. Arrange the planting season reasonably so that the rice-ripening stage is at a time less affected by rainstorms. Apply improved rice farming techniques SRI, 3 decrease, 3 increase, 1 must 5 decrease, integrated pest management IPM. People should transplant sparsely, transplant 1-2 stalks/clump, apply deep priming, apply early fertilization, focus on heavy fertilization at the beginning and end and balance between NPK to help rice plants grow and develop healthily and increase disease resistance. right from the start.For areas prone to rice blight disease, priority should be given to increasing phosphorus and potassium.With the short-term crops or accumulating nitrogen at the end of the crop, farmers need to reduce the amount of nitrogen, increase phosphorus and potassium for hard and thick-leaved plants, to avoid late-season blight infection. Deep priming, early tillering, 7-10 days after transplanting.Reasonable watering for hardy rice plants, hard leaves, both increased resistance to fall and increased resistance to pests in general and leaf blight in particular.",
    },
    {
        id: 2,
        disease: "Bệnh Đốm nâu (Brown spot)",
        symptom: "Leaf lesions are initially small, light brown spots, which later develop into darker brown lesions. In disease-resistant rice varieties, the diseased spots are narrow, short, dark brown in color from 2 to 10x1 mm; In infected varieties, the spots are longer and wider, lighter brown in color and light in the center. In general, the disease spots are usually reddish brown, the leaf edges are lighter, so the heavily infected fields are bright red. The lesions on the seeds are brown, then turn black. The fungus survives on seeds and is a source of disease for the next crop.",
        treatment: "When the rice field shows signs of disease, one of the drugs with broad spectrum effects such as Tilt Super 300EC, AmistarTop 325SC, Mixperfect 525SC, etc. can be used to prevent it.",
        prevention: "Plowing, plowing and plowing the soil thoroughly (except for those with shallow alum layer, easy to leak alum when working on the soil), infertile, sandy soils that need to be fertilized with a lot of manure to improve and increase nutrients soil nourishment.Do not sow too thick, easy to make rice lack of food to grow, develop poorly, diseases easily arise.Fields contaminated with alum or excess organic matter need to be applied more lime, phosphate, etc. to accelerate the decomposition of organic matter and raise the pH of the soil, creating favorable conditions for rice plants. grow and develop well.Always provide adequate water for the rice fields, especially at the beginning of the summer-autumn crop when the weather is dry, if there is a shortage of alkaline water from the lower soil layer, it will leak to the cultivation layer, causing root poisoning, making rice plants grow poorly, creating conditions for disease attack.Must be fully and balanced fertilizer between phosphorus and potassium (especially with voracious varieties), absolutely must not let rice plants lack nitrogen, lack of nutrition will grow and develop poorly.In addition to the above measures, in order to limit the disease transmitted to the next crop through seeds and crop residues, you should take some of the following measures:After harvesting rice, it is necessary to clean the field, clean up the residue of rice plants to limit the initial disease spread to the next crop.Do not take rice from the fields of the previous crop that have been seriously infected with the disease to make seeds for the next crop. Before soaking, it must be dried and fanned thoroughly to remove all suspended seeds (those that carry many fungal diseases).Because the fungus exists right on the husk, so to completely eliminate the original source of the disease to infect the next crop, before soaking, you must treat the seed with hot water 540C then take it out and clean it. ",
    },
    {
        id: 3,
        disease: "Bệnh Bọ gai hại lúa (Hispa)",
        symptom: "Adult beetles feed externally on the upper epidermis, causing a characteristic pattern of white, parallel streaks along the main axis of the leaf. In case of severe infestation, even the veins can be affected, leading to the appearance of large, white blotches. Adults are often present on the damaged leaves, generally on the upper side. The larvae feed on the green tissue between the two epidermises of the leaves, tunneling along the veins and causing white patches. They can be detected by holding the damaged leaf against light or by passing the fingers along the tunnel. Infested leaves dry up, and present a white appearance in the field. From a distance, severely damaged fields look burnt ",
        treatment: "The biological control of this pest is still under study. The larval parasitoid, Eulophus femoralis, has been introduced in Bangladesh and India and may reduce the hispa problem in these areas. The conservation of indigenous natural enemies may also play an important role in the management of this pest. For example, there are small wasps that attack the eggs and larvae and a reduviid bug that eats on the adults. There are also three fungal pathogens that attack the adults.Always consider an integrated approach with preventive measures together with biological treatments if available. In cases of severe infestation, several chemical formulations containing the following active ingredients could be used to control populations:chlorpyriphos, malathion, cypermethrin, fenthoate",
        prevention: "No effective resistance trait to this pest is available in rice. Use narrower plant spacing with greater leaf densities.Grow crops early in the season to avoid peak populations. Cut the shoot tip to prevent egg-laying. Collect adult bugs with a sweeping net, preferably early in the morning when they are less mobile. Remove any kind of weed from the rice field during the crop-free season. Infested leaves and shoots should be clipped and burned, or buried deep in the mud. Avoid excessive nitrogen fertilization in infested fields. Apply a crop rotation to break the life cycle of the pest.",
    },
    {
        id: 4,
        disease: "Bệnh Đạo ôn (Leaf blast)",
        symptom: "Rice blast stems from the visual symptoms it causes to rice plants. When conditions are favorable, plant tissues become necrotic and from a distance, severely infected leaves appear. Blast disease can cause lesions on leaves, leaf collars, nodules, stems, buds and seeds. In about 90% of cases, the flowers and seeds are visible to the naked eye, while the leaves and roots are asymptomatic.Initially, on young leaves, purple spots form. Over time, these spots become spindle-shaped. Large lesions often develop rhombic with gray centers and brown margins. Infection on the neck can be fatal; it can lead to a condition called neck burst, in which the entire ear of rice can be spilled.",
        treatment: "For blast disease, people can spray prevention or spray when the disease has just appeared with Taiyou 20SC with a dosage of 25 ml/16 liter bottle. When the weather is favorable for disease development, spray a second time 7-10 days after the first spray. When there is blast disease, do not let the field dry out, do not apply nitrogen fertilizers, do not spray foliar fertilizers and growth stimulants. If the field suffers from severe leaf blast after spraying, it takes 5-7 days for acute spots on young leaves to be sprayed again.",
        prevention: "Use disease-resistant cultivars and seeds. It is always recommended to plant high-quality, disease-free seeds.Maintain the Right Space: Avoid planting at a density that is too large for light to penetrate.Adequate Fertilization: Overuse of nitrogen fertilizers usually does not significantly increase yield and may increase the number of new blast diseased plants.Sanitation: Keep plant surroundings clean by removing weeds, plant debris, damaged plant parts, unwanted plant growth, and natural surrounding plants. growing and unprotected.",
    },
    {
        id: 5,
        disease: "Bệnh Bỏng lá hại lúa (Leaf scald)",
        symptom: "Symptoms include two main forms (chronic or acute) and two stages (latent and eclipse). The chronic forms show lines on leaf blades that run parallel to the ribs. They can be as wide as 1 cm. The acute form shows sudden wilting of mature stalks. There are usually no external symptoms. The disease can be latent, it may not be obvious for some time and the plant is seriously affected when the symptoms first appear. The first sign of the disease is the development of white pencil lines with yellow borders following the veins on the leaf that lead to tissue necrosis. The disease can also cause the shoots to be stunted and wilted. Affected leaves usually turn into dull-blue green colour before dense browning. Under stressful conditions, the whole shoot may die. On mature stalks, spindle leaves become necrotic from the tips and moderate to profuse side shoots develop. Side shoots usually show scalding or white pencil lines.",
        treatment: "Seed cane can be given a long hot water treatment to kill the pathogen. Pre-soak seed cane or cuttings in flowing water followed by a three hour 50°C treatment to clean infected planting material. Always consider an integrated approach with preventive measures together with biological treatments, if available. As of today no chemical control methods have been developed against these bacteria. But you can dip setts in a solution containing carbendazim 5 g in 10 lit of water for 15 minutes after hot water treatment to reduce infestation to a certain level.",
        prevention: "Introduce only disease-free plant material. Control the distribution and exchange of plant materials, especially when cutting. Eliminate susceptible varieties during the sugarcane selection process. Remove alternative hosts.",
    },
    {
        id: 6,
        disease: "Bệnh xì mủ lá (Leaf smut)",
        symptom: "The characteristic sign of rice with foliar blight is the appearance of small black spots on the leaves. They are slightly raised and angled and give the leaves the appearance of being sprinkled with ground pepper. Coverage of these spots is most complete on the oldest leaves. The tips of some of the most infected leaves may die.",
        treatment: "In most situations, there is no major damage caused by rice leaf blight, so it usually goes untreated.",
        prevention: "However, it can be a good idea to adopt good general management practices to prevent infection or control disease and keep the plant healthy overall.As with many other fungal infections, this is spread by infected plants in the soil. When healthy leaves come into contact with water or the ground with diseased old leaves, they can become infected. Clearing up debris at the end of each growing season can prevent the spread of foliar blight.Keeping a good nutritional balance is also important, as high nitrogen intake increases the incidence of disease. Finally, if foliar blight is a problem in your growing area, consider using resistant rice varieties.",
    },
    {
        id: 7,
        disease: "Bệnh Bỏng lá hại lúa (Leaf scald)",
        symptom: "Symptoms include two main forms (chronic or acute) and two stages (latent and eclipse). The chronic forms show lines on leaf blades that run parallel to the ribs. They can be as wide as 1 cm. The acute form shows sudden wilting of mature stalks. There are usually no external symptoms. The disease can be latent, it may not be obvious for some time and the plant is seriously affected when the symptoms first appear. The first sign of the disease is the development of white pencil lines with yellow borders following the veins on the leaf that lead to tissue necrosis. The disease can also cause the shoots to be stunted and wilted. Affected leaves usually turn into dull-blue green colour before dense browning. Under stressful conditions, the whole shoot may die. On mature stalks, spindle leaves become necrotic from the tips and moderate to profuse side shoots develop. Side shoots usually show scalding or white pencil lines.",
        treatment: "Seed cane can be given a long hot water treatment to kill the pathogen. Pre-soak seed cane or cuttings in flowing water followed by a three hour 50°C treatment to clean infected planting material. Always consider an integrated approach with preventive measures together with biological treatments, if available. As of today no chemical control methods have been developed against these bacteria. But you can dip setts in a solution containing carbendazim 5 g in 10 lit of water for 15 minutes after hot water treatment to reduce infestation to a certain level.",
        prevention: "Introduce only disease-free plant material. Control the distribution and exchange of plant materials, especially when cutting. Eliminate susceptible varieties during the sugarcane selection process. Remove alternative hosts.",
    },
    {
        id: 8,
        disease: "Bệnh Bỏng lá hại lúa (Leaf scald)",
        symptom: "Symptoms include two main forms (chronic or acute) and two stages (latent and eclipse). The chronic forms show lines on leaf blades that run parallel to the ribs. They can be as wide as 1 cm. The acute form shows sudden wilting of mature stalks. There are usually no external symptoms. The disease can be latent, it may not be obvious for some time and the plant is seriously affected when the symptoms first appear. The first sign of the disease is the development of white pencil lines with yellow borders following the veins on the leaf that lead to tissue necrosis. The disease can also cause the shoots to be stunted and wilted. Affected leaves usually turn into dull-blue green colour before dense browning. Under stressful conditions, the whole shoot may die. On mature stalks, spindle leaves become necrotic from the tips and moderate to profuse side shoots develop. Side shoots usually show scalding or white pencil lines.",
        treatment: "Seed cane can be given a long hot water treatment to kill the pathogen. Pre-soak seed cane or cuttings in flowing water followed by a three hour 50°C treatment to clean infected planting material. Always consider an integrated approach with preventive measures together with biological treatments, if available. As of today no chemical control methods have been developed against these bacteria. But you can dip setts in a solution containing carbendazim 5 g in 10 lit of water for 15 minutes after hot water treatment to reduce infestation to a certain level.",
        prevention: "Introduce only disease-free plant material. Control the distribution and exchange of plant materials, especially when cutting. Eliminate susceptible varieties during the sugarcane selection process. Remove alternative hosts.",
    },
];

