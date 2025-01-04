import { Tabs, Tab } from "@nextui-org/react";
import { TbSchool, TbCertificate } from "react-icons/tb";
import { MdOutlineWorkOutline } from "react-icons/md";
export default function App() {
    return (
        <div className="flex mx-5 sm:w-2/6 sm:m-auto flex-col">
            <Tabs className="flex flex-col" aria-label="Options">
                <Tab className="text-lg" key="photos" title="Education">
                    <div className="bg-transparent flex flex-row gap-4 p-2 items-center rounded-2xl border my-4">
                        <div className="flex opacity-50">
                            <TbSchool size={50} />
                        </div>
                        <div className="flex flex-col w-10/12">
                            <h1 className="text-xl">
                                Bechalors of Technology in Information
                                Technology
                            </h1>
                            <h1 className="opacity-50 text-xl">
                                Dr. Akhilesh Das Gupta Institute of Technology and Management
                            </h1>
                            <h1 className="opacity-50 text-md">2021-2025</h1>
                        </div>
                    </div>
                    <div className="bg-transparent flex flex-row gap-4 p-2 items-center rounded-2xl border my-4">
                        <div className="flex opacity-50">
                            <TbSchool size={50} />
                        </div>
                        <div className="flex flex-col w-10/12">
                            <h1 className="text-xl">Senior Year (12th)</h1>
                            <h1 className="opacity-50 text-xl">
                                KIIT World School
                            </h1>
                            <h1 className="opacity-50 text-md">2020</h1>
                        </div>
                    </div>
                    <div className="bg-transparent flex flex-row gap-4 p-2 items-center rounded-2xl border my-4">
                        <div className="flex opacity-50">
                            <TbSchool size={50} />
                        </div>
                        <div className="flex flex-col w-10/12">
                            <h1 className="text-xl">Junior Year (10th)</h1>
                            <h1 className="opacity-50 text-xl">
                            KIIT World School
                            </h1>
                            <h1 className="opacity-50 text-md">2018</h1>
                        </div>
                    </div>
                </Tab>
               
                <Tab className="text-lg" key="videos" title="Career">
                    <div className="bg-transparent flex flex-row gap-4 p-2 items-center rounded-2xl border my-4">
                        <div className="flex opacity-50">
                            <MdOutlineWorkOutline size={50} />
                        </div>
                        <div className="flex flex-col w-10/12">
                            <h1 className="text-xl">
                                Frontend Developer 
                            </h1>
                            <h1 className="opacity-50 text-xl">HiKisan</h1>
                            <h1 className="opacity-50 text-md">2024</h1>
                        </div>
                    </div>
                    <div className="bg-transparent flex flex-row gap-4 p-2 items-center rounded-2xl border my-4">
                        <div className="flex opacity-50">
                            <MdOutlineWorkOutline size={50} />
                        </div>
                        <div className="flex flex-col w-10/12">
                            <h1 className="text-xl">Full Stack Developer</h1>
                            <h1 className="opacity-50 text-xl">Google Developer Students Club</h1>
                            <h1 className="opacity-50 text-md">2023</h1>
                        </div>
                    </div>

                    <div className="bg-transparent flex flex-row gap-4 p-2 items-center rounded-2xl border my-4">
                        <div className="flex opacity-50">
                            <MdOutlineWorkOutline size={50} />
                        </div>
                        <div className="flex flex-col w-10/12">
                            <h1 className="text-xl">Web Developer Intern</h1>
                            <h1 className="opacity-50 text-xl">Kolify</h1>
                            <h1 className="opacity-50 text-md">2023</h1>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
}
