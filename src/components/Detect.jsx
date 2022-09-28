import React from 'react'
import { useState, useEffect } from "react";
import { useGeolocated } from "react-geolocated";


const Detect = () => {
    const [img, setImg] = useState()

    useEffect(() => {
        return () => {
            img && URL.revokeObjectURL(img.preview)
        }
    }, [img])

    const handlePreviewImg = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)

        setImg(file)
    }

    return (
        <div name='allInOne' className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto px-2'>
                <h2 className='text-5xl font-bold text-center'>Detect rice leaf diseases</h2>
                <p className='text-2xl py-8 text-gray-500 text-center'>
                    This is an intelligent, optimal monitoring and support system powered by AI for Vietnamese people.
                </p>

                <div className='grid sm:grid-cols-3 lg-grid-cols-4 gap-4 pt-4'>

                    <div className='col-span-2'>

                        <div>
                            <h3 className='font-bold text-lg'>Information</h3>
                            <p className='text-lg pt-2 pb-4'>
                            Our system allows 
                            users to collect heterogeneous data collected from multiple sources using a convenient smartphone 
                            camera, providing a visual representation of analysis and prediction results.
                            </p>
                        </div>

                        {/* <div>
                            <h3 className='font-semibold text-lg text-gray-500'>English below</h3>
                            <h3 className='font-bold text-lg text-red-600'>Chẩn đoán: <i>Bệnh vàng lá (Tungro)</i></h3>
                            <p className='text-lg pt-2 pb-4'>
                                <h2 className='font-bold'>Triệu chứng</h2>
                                Cây phát triển còi cọc và đẻ ít nhánh, lá chuyển sang màu vàng hay vàng cam bắt đầu từ chóp
                                là rồi lan dần xuống phần dưới lá. Lá mất màu cũng có thể có các vết nâu đen nhỏ và không đồng
                                đều. Bên cạnh đó, các triệu chúng nhẹ hơn khác được tìm thấy ở cây lúa ví dụ như phát triển hơi
                                còi cọc nhưng không bị vàng lá.
                            </p>

                            <p className='text-lg pt-2 pb-4'>
                                <h2 className='font-bold'>Cách điều trị</h2>
                                <h2 className='font-semibold'>Biện pháp hữu cơ</h2>
                                Có thể sử dụng bẫy đèn để thu hút và khống chế loài rầy xanh mang mầm bệnh và giám sát số lượng
                                quần thể của chúng. Vào sáng sớm, có thể bắt và xử lí số lượng quần thể rầy xanh đậu bẫy đèn bằng
                                các phun hay rắc các loài thuốc trừ sâu. Các làm này nên được thực hiện hàng ngày.

                                <h2 className='font-semibold pt-2'>Biện pháp vô cơ</h2>
                                Phun các loại thuốc trừ sâu có gốc buprofezin hay pymetrozine ở
                                thời điểm ngày thứ 15 và ngày thứ 30 sau khi cấy có thể đạt hiệu quả nếu được thực hiện đúng thời
                                gian. Tuy nhiên, sâu hại có thể chuyển sang các cánh đồng xung quanh và lan truyền bệnh  một
                                các nhanh chóng chỉ trong thời gian ngắn. Vì thế, các loài cây quanh cánh đồng cũng cần được phun
                                các loại thuốc trừ sâu nêu trên.
                            </p>


                        </div> */}

                    </div>


                    <div className='flex'>

                        <div>
                            <h3 className='font-bold text-lg text-green-600'>Detect now!</h3>
                            {/* <p className='text-lg pt-2 pb-4'>
                                Upload your image
                                </p> */}
                            <p className='text-lg pt-2 pb-4 font-semibold'>
                            Upload image here
                            </p>
                            <div>
                                <input
                                    type="file"
                                    onChange={handlePreviewImg}
                                />

                                {img && (
                                    <img src={img.preview} alt="" width="600px" />
                                )}
                            </div>
                            <button className='p-1 mb-4 mt-3'>Submit</button>
                            
                        </div>
                    </div>

                </div>
                {/* <p className='text-lg pt-2 pb-4'>
                    <h2 className='font-bold'>Biện pháp phòng tránh</h2>
                    <ul>
                        <li>- Sử dụng các giống lúa có sức đề kháng nhất định đối với các loài sâu hại mang mầm virut</li>
                        <li>- Trong hai loài cây trông trong những tháng mà số lượng quần thể sâu hại mang mầm bệnh thấp</li>
                        <li>- Luân canh với các loài cây trồng không phải là cây ký chủ của mầm bệnh</li>
                        <li>- Lên kế hoạch giao trồng để đảm bảo sự phát triển gần như đồng bộ tại mỗi khu vực</li>
                        <li>- Cày sâu để tiêu hủy trứng sâu hại và những địa điểm sinh sản của chúng</li>
                        <li>- Lần lượt ngâm và tháo nước phơi đồng</li>
                        <li>- Bảo về các loài côn trùng có ích.</li>
                    </ul>
                </p> */}
            </div>
        </div>

    )
}

export default Detect