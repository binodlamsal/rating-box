import { produce } from "immer";
import { __ } from "@wordpress/i18n";
import "./editor.css";
import { PanelBody, PanelRow, TextControl, SelectControl, TextareaControl } from '@wordpress/components';

import { RichText, PlainText, useBlockProps, InspectorControls } from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes, className }) {
    const blockProps = useBlockProps({ className: 'rating-box' });
    const services = attributes.services;

    const onChangeContent = (content, index, type) => {
        const newContent = produce(services, (draftState) => {
            draftState.forEach((section) => {
                if (section.index === index) {
                    section[type] = content;
                }
            });
        });
        setAttributes({ services: newContent })
    };

    const onClickremoveContent = (newServices, index) => {
        for (let ind in newServices) {
            if (newServices[ind].index === index) {
                newServices.splice(ind, 1);
            }
        }
        return newServices;
    };

    return (

        <>
            <InspectorControls>
                <PanelBody title={__('Content Settings', 'author-plugin')}>
                    {services.map((service) => (
                        <div className="panel-editor">
                            <SelectControl
                                label={__('Select a rating:')}
                                value={service.rate}
                                onChange={(content) =>
                                    onChangeContent(content, service.index, "rate")
                                }
                                options={[
                                    { value: '', label: 'Select a rating', disabled: false },
                                    { value: 3.5, label: '3.5' },
                                    { value: 4, label: '4' },
                                    { value: 4.5, label: '4.5' },
                                    { value: 5, label: '5' },
                                ]}
                                __nextHasNoMarginBottom
                            /> <br />

                            <TextareaControl
                                label={__("Enter description...")}
                                className="texconrol"
                                value={service.description}
                                onChange={(content) =>
                                    onChangeContent(content, service.index, "description")
                                }
                            /> <br />

                            <TextControl
                                value={service.title}
                                label={__("Enter title...")}
                                onChange={(content) =>
                                    onChangeContent(content, service.index, "title")
                                }
                            />
                            <TextControl
                                value={service.designation}
                                label={__("Enter designation...")}
                                onChange={(content) =>
                                    onChangeContent(content, service.index, "designation")
                                }
                            />
                            <input
                                className="button button-secondary"
                                type="button"
                                value={__("Remove Rating", "am2-gutenberg")}
                                onClick={() =>
                                    setAttributes({
                                        services: [
                                            ...onClickremoveContent(attributes.services, service.index),
                                        ],
                                    })
                                }
                            />

                        </div>
                    ))}
                    <input
                        className="button button-secondary panel-editor-button"
                        type="button"
                        value={__("Add Rating", "am2-gutenberg")}
                        onClick={() =>
                            setAttributes({
                                services: [
                                    ...attributes.services,
                                    { rate: "", description: "", title: "", designation: "", index: services.length },
                                ],
                            })
                        }
                    />
                </PanelBody>
            </InspectorControls>



            <div className="main-rate-wrapper">
                <div className="rate-wrapper">
                    {services.map((service) => (
                        <div {...blockProps}>
                            <SelectControl
                                label={__('Select a rating:')}
                                value={service.rate}
                                onChange={(content) =>
                                    onChangeContent(content, service.index, "rate")
                                }
                                options={[
                                    { value: '', label: 'Select a rating', disabled: false },
                                    { value: 3.5, label: '3.5' },
                                    { value: 4, label: '4' },
                                    { value: 4.5, label: '4.5' },
                                    { value: 5, label: '5' },
                                ]}
                                __nextHasNoMarginBottom
                            />

                            {
                                (() => {
                                    switch (true) {

                                        case (service.rate == 3.5): {
                                            return (
                                                <span className="e-item-card-recently-viewed_stars"> <span className="m-item-card-recently-viewed_stars__orange">★ ★ ★ </span> <span className='half'><div>★</div><div>★</div></span> </span>
                                            )
                                        }
                                            break;

                                        case (service.rate == 4): {
                                            return (
                                                <span className="e-item-card-recently-viewed_stars"> <span className="m-item-card-recently-viewed_stars__orange">★ ★ ★ ★ </span> <span className='half'></span> </span>
                                            )
                                        }
                                            break;

                                        case (service.rate == 4.5): {
                                            return (
                                                <span className="e-item-card-recently-viewed_stars"> <span className="m-item-card-recently-viewed_stars__orange">★ ★ ★ ★ </span> <span className='half'><div>★</div><div>★</div></span> </span>
                                            )
                                        }
                                            break;

                                        case (service.rate == 5): {
                                            return (
                                                <span className="e-item-card-recently-viewed_stars"> <span className="m-item-card-recently-viewed_stars__orange">★ ★ ★ ★ ★</span> <span className='half'></span> </span>
                                            )
                                        }
                                            break;

                                    }
                                })()
                            }

                            <RichText
                                tagName="p"
                                className={className}
                                value={service.description}
                                placeholder="Enter description..."
                                onChange={(content) =>
                                    onChangeContent(content, service.index, "description")
                                }
                            />
                            <PlainText
                                className={className}
                                value={service.title}
                                placeholder="Enter title..."
                                onChange={(content) =>
                                    onChangeContent(content, service.index, "title")
                                }
                            />
                            <PlainText
                                className={className}
                                value={service.designation}
                                placeholder="Enter designation..."
                                onChange={(content) =>
                                    onChangeContent(content, service.index, "designation")
                                }
                            />
                            <input
                                className="button button-secondary"
                                type="button"
                                value={__("Remove Rating", "am2-gutenberg")}
                                onClick={() =>
                                    setAttributes({
                                        services: [
                                            ...onClickremoveContent(attributes.services, service.index),
                                        ],
                                    })
                                }
                            />

                        </div>


                    ))
                    }
                </div>
                <input
                    className="button button-secondary"
                    type="button"
                    value={__("Add Rating", "am2-gutenberg")}
                    onClick={() =>
                        setAttributes({
                            services: [
                                ...attributes.services,
                                { rate: "", description: "", title: "", designation: "", index: services.length },
                            ],
                        })
                    }
                />
            </div>
        </>
    );
}