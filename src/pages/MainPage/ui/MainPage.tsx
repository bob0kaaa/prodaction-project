import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HStack } from 'shared/ui/Stack';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page>
            {t('Главная страница')}
            <div>123</div>
            <div>123</div>
            <HStack>
                <div>321</div>
                <ListBox
                    defaultValue="Выбрать значение"
                    onChange={() => {}}
                    value={undefined}
                    items={[
                        { value: '1', content: '111' },
                        { value: '2', content: '222', disabled: true },
                        { value: '3', content: '333' },
                    ]}
                />
            </HStack>
            <div>123</div>
            <div>123</div>
            <div>123</div>
        </Page>
    );
};

export default MainPage;
