import React from 'react'

const JobCard = () => {
    return (
        <div className="max-w-sm mx-auto bg-white border rounded-lg shadow-md overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/doc-nhat-vo-nhi-cf104af92d2f5e4e9765da24aa3a06e7-670c8ae806342.jpg" alt="Placeholder Image" />
            <div className="p-4">
                <h2 className="text-lg font-semibold">Nhân Viên Nhà Hàng / Nhân Viên P...</h2>
                <p className="text-gray-600">Độc Nhất Võ Nhị</p>
                <div className="flex justify-between items-center mt-4">
                    <span className="bg-gray-200 text-gray-600 text-sm px-3 py-1 rounded-full">6.5 - 11 triệu</span>
                    <span className="text-gray-600">Hà Nội</span>
                    <button className="text-gray-600 hover:text-gray-800">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18M3 12h18M3 21h18"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default JobCard
