import React from "react";
import {clientReviews, CLIENTS_SECTION_TITLE, CLIENTS_STAR_ALT_TEXT, CLIENTS_STAR_IMAGE_SRC} from "../constants/clients.js";

const Clients = () => {
    return (
        <section className={"c-space my-20"}>
            <h3 className={"head-text"}>{CLIENTS_SECTION_TITLE}</h3>

            <div className={"client-container"}>
                {clientReviews.map(({id, name, review, img, position}) => (
                    <div key={id} className={"client-review"}>
                        <div>
                            <p className={"text-white font-light"}>{review}</p>
                            <div className={"client-content"}>
                                <div className={"flex gap-3"}>
                                    <img
                                        src={img}
                                        alt={name}
                                        className={"w-12 h-12 rounded-full"}
                                    />
                                    <div className={"flex flex-col"}>
                                        <p className={"font-semibold text-white-800"}>{name}</p>
                                        <p className={"text-white-500 md:text-base text-sm"}>
                                            {position}
                                        </p>
                                    </div>
                                </div>
                                <div className={"flex self-end gap-2 items-center"}>
                                    {Array.from({length: 5}).map((_, index) => (
                                        <img
                                            key={index}
                                            src={CLIENTS_STAR_IMAGE_SRC}
                                            alt={CLIENTS_STAR_ALT_TEXT}
                                            className={"w-5 h-5"}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default Clients;
