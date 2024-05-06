import { useState } from "react";
import { LuMailOpen } from "react-icons/lu";

const NewsLetter = () => {
  const [value, setValue] = useState("");

  return (
    <div className="bg-[#185b2c] mt-16 flex w-full justify-center">
      <div className="container py-8 flex flex-col w-full md:flex-row justify-between items-center gap-4 text-white">
        <div className="flex flex-shrink-0 items-center gap-4">
          <LuMailOpen className="text-[60px]" />
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold">
              Chúng tôi luôn cập nhật sản phẩm mới nhất
            </h3>
            <p>
              Hãy đăng ký email để nhận thông báo hàng ngày nhé! Đừng bỏ lỡ bất
              kỳ thông tin quan trọng nào từ chúng tôi!
            </p>
          </div>
        </div>

        <div className="w-full max-w-[500px] relative">
          <input
            type="text"
            placeholder="Nhập email của bạn"
            className="w-full px-6 py-4 rounded-full text-black"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="bg-[#185b2c] absolute top-[50%] right-2 translate-y-[-50%] px-4 py-2 rounded-full hover:bg-[#31a854] transition">
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
