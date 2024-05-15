import React, { useState } from "react";
import { AiFillFacebook } from "react-icons/ai";

function formView() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const enable = username && password;

  return (
    <div className="w-[350px] grid gap-y-3">
      <div className=" bg-white border p-[40px] pb-2">
        <a href="#" className="flex justify-center mb-8">
          <img
            className="h-[51px]"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
            alt=""
          />
        </a>
        <div className=" grid gap-y-2">
          <label className="block relative">
            <input
              required={true}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className=" w-full px-2 outline-none focus:border-gray-400 h-[38px]  border rounded-sm bg-zinc-50 valid:pt-[10px] peer"
              type="text"
            />
            <small className="absolute top-1/2 left-[9px] text-xs cursor-text pointer-events-none text-gray-400 -translate-y-1/2  peer-valid:text-[10px] peer-valid:font-sans peer-valid:top-2.5">
              Telefon Numarası,kullanıcı adı veya e-posta
            </small>
          </label>
          <label className="block relative">
            <input
              required={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" w-full px-2 outline-none focus:border-gray-400 h-[38px] border rounded-sm bg-zinc-50 valid:pt-[10px] peer "
              type="password"
            />
            <small className="absolute top-1/2 left-[9px] text-xs cursor-text pointer-events-none text-gray-400 -translate-y-1/2 peer-valid:text-[10px] peer-valid:font-sans peer-valid:top-2.5 ">
              Şifre
            </small>
          </label>
          <button
            type="submit"
            disabled={!enable}
            className="h-[30px] rounded bg-brand font-medium mt-1 text-white text-sm disabled:opacity-50 hover:bg-blue-700 "
          >
            Giriş Yap
          </button>
          <div className="flex items-center my-2">
            <div className="h-px bg-gray-300 flex-1" />
            <span className="px-4 text-[13px]">OR</span>
            <div className="h-px bg-gray-300 flex-1" />
          </div>
          <div>
            <a
              href="#"
              className="flex justify-center items-center gap-x-2 text-sm font-semibold text-facebook"
            >
              <AiFillFacebook size={20} />
              FaceBook İle Giriş Yap
            </a>
            <a
              href="#"
              className="flex justify-center items-center gap-x-2 text-xs mt-2 font-semibold text-link"
            >
              Şifremi Unuttum?
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white border p-4 text-sm text-center">
        <a href="#" className="text-sm text-blue-400 font-medium">
          Yeni Hesap Oluştur
        </a>
      </div>
    </div>
  );
}

export default formView;
