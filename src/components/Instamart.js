import { useState } from 'react';

const Section = ({ title, description, isVisible, setIsVisible }) => {
    return (
        <div className="border border-black p-2">
            <h2 className="text-xl font-bold">{title}</h2>
            {isVisible ? (
                <>
                    <button
                        onClick={() => {
                            setIsVisible(false);
                        }}
                    >
                        Hide
                    </button>
                    <p>{description}</p>
                </>
            ) : (
                <button
                    onClick={() => {
                        setIsVisible(true);
                    }}
                >
                    Show
                </button>
            )}
        </div>
    );
};

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState('about');
    return (
        <div className="mx-10 my-5">
            <h1 className="text-3xl font-bold">Instamart</h1>
            <div className="flex flex-col gap-3">
                <Section
                    title={'About Instamart'}
                    description={
                        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ipsum molestiae sunt excepturi distinctio temporibus facilis maxime unde atque ratione inventore, accusamus fugit modi reprehenderit accusantium quod possimus? Ullam corporis distinctio, perspiciatis, itaque sapiente inventore laudantium voluptatibus, delectus at dolore iure. Atque error odio facere magni eligendi, consequuntur tempore blanditiis.'
                    }
                    isVisible={visibleSection === 'about'}
                    setIsVisible={(isVisible) =>
                        isVisible
                            ? setVisibleSection('about')
                            : setVisibleSection('')
                    }
                ></Section>
                <Section
                    title={'Instamart Items'}
                    description={
                        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ipsum molestiae sunt excepturi distinctio temporibus facilis maxime unde atque ratione inventore, accusamus fugit modi reprehenderit accusantium quod possimus? Ullam corporis distinctio, perspiciatis, itaque sapiente inventore laudantium voluptatibus, delectus at dolore iure. Atque error odio facere magni eligendi, consequuntur tempore blanditiis.'
                    }
                    isVisible={visibleSection === 'items'}
                    setIsVisible={(isVisible) =>
                        isVisible
                            ? setVisibleSection('items')
                            : setVisibleSection('')
                    }
                ></Section>
                <Section
                    title={'Team Instamart'}
                    description={
                        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ipsum molestiae sunt excepturi distinctio temporibus facilis maxime unde atque ratione inventore, accusamus fugit modi reprehenderit accusantium quod possimus? Ullam corporis distinctio, perspiciatis, itaque sapiente inventore laudantium voluptatibus, delectus at dolore iure. Atque error odio facere magni eligendi, consequuntur tempore blanditiis.'
                    }
                    isVisible={visibleSection === 'team'}
                    setIsVisible={(isVisible) =>
                        isVisible
                            ? setVisibleSection('team')
                            : setVisibleSection('')
                    }
                ></Section>
            </div>
        </div>
    );
};

export default Instamart;
