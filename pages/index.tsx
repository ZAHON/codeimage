import type { NextPage } from 'next';
import Head from 'next/head';

import { useState } from 'react';
import { PackgeExport } from 'tabler-icons-react';

import { ThemeChanger } from '@/components/ThemeChanger/ThemeChanger';
import {
  Button,
  ActionIcon,
  Tooltip,
  Select,
  SelectItem,
  SelectGroup,
  SelectSeparator,
  Label,
} from '@/components/UI/.';

const Home: NextPage = () => {
  const [selectValue, setSelectValue] = useState('0');

  return (
    <>
      <Head>
        <title>CodeImage</title>
        <meta name="description" content="Create beautiful images of your source code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          rowGap: '1rem',
        }}
      >
        <ThemeChanger />
        <Tooltip content="Test">
          <h1>CodeImage</h1>
        </Tooltip>
        <Button icon={<PackgeExport size={16} />} onClick={() => alert('Clicked Button')}>
          Button
        </Button>
        <Label htmlFor="test12345">Test Select</Label>
        <Select id="test12345" value={selectValue} onChange={setSelectValue}>
          <SelectGroup label="Test 1">
            <SelectItem value="0">Value 0</SelectItem>
            <SelectItem disabled value="1">
              Value 1
            </SelectItem>
            <SelectItem value="2">Value 2</SelectItem>
            <SelectItem value="3">Value 3</SelectItem>
            <SelectItem value="4">Value 4</SelectItem>
            <SelectItem value="5">Value 5</SelectItem>
            <SelectItem value="6">Value 6</SelectItem>
            <SelectItem value="7">Value 7</SelectItem>
            <SelectItem value="8">Value 8</SelectItem>
            <SelectItem value="9">Value 9</SelectItem>
            <SelectItem value="10">Value 10</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectItem value="11">Value 11</SelectItem>
          <SelectItem value="12">Value 12</SelectItem>
          <SelectItem value="13">Value 13</SelectItem>
          <SelectItem value="14">Value 14</SelectItem>
          <SelectItem value="15">Value 15</SelectItem>
          <SelectItem value="16">Value 16</SelectItem>
          <SelectItem value="17">Value 17</SelectItem>
          <SelectItem value="18">Value 18</SelectItem>
          <SelectItem value="19">Value 19</SelectItem>
          <SelectItem value="20">Value 20</SelectItem>
          <SelectItem value="21">Value 21</SelectItem>
          <SelectItem value="22">Value 22</SelectItem>
          <SelectItem value="23">Value 23</SelectItem>
          <SelectItem value="24">Value 24</SelectItem>
          <SelectItem value="25">Value 25</SelectItem>
          <SelectItem value="26">Value 26</SelectItem>
          <SelectItem value="27">Value 27</SelectItem>
          <SelectItem value="28">Value 28</SelectItem>
          <SelectItem value="29">Value 29</SelectItem>
          <SelectItem value="30">Value 30</SelectItem>
        </Select>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Tooltip content="Lorem ipsum dolor sit amet" side="bottom" align="center">
          <ActionIcon ariaLabel="Test" onClick={() => alert('Clicked Action Icon')}>
            <PackgeExport size={18} focusable="false" aria-hidden="true" />
          </ActionIcon>
        </Tooltip>
      </div>
    </>
  );
};

export default Home;
