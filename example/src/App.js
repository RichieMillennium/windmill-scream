import React, { Fragment } from 'react'
import './styles/tailwind.css'

import {
  Button,
  DropDown,
  DropDownOption,
  Header,
  HeaderGroup,
  HeaderItem,
  TextInput,
  SelectInput,
  SelectOption,
  Checkbox,
  RadioButton
} from 'windmill-scream'

const CodeBlock = ({children}) => {
  return (
    <div
      className="m-1 p-2 font-mono text-xs bg-gray-200 text-primary-800">
    <pre
      className="h-full">
      <code>{children}</code>
    </pre>
    </div>)
}

export const App = () => {
  const handleGithub = () => {
    window.open('https://github.com/RichieMillennium/windmill-scream', '_blank')
  }
  return (
    <Fragment>
      <Header
        title={
          <h1
            className="text-2xl font-extrabold">Windmill
            Scream
            Demo</h1>}>
        <HeaderGroup
          floatRight={true}>
          <HeaderItem>
            <Button
              transparent={true}
              onClick={handleGithub}>
              GitHub
              <svg
                className="fill-current float-right ml-2"
                viewBox="0 0 24 24"
                width="24"
                height="24">
                <path
                  d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z"/>
              </svg>
            </Button>
          </HeaderItem>
        </HeaderGroup>
      </Header>
      <div
        className="container m-auto mt-4 py-4 md:px-16 font-mono text-xs bg-gray-200 text-primary-800 sm:px-4">
          <pre
            className="h-full">
            <code>
              &lt;Header title=&#123;&lt;h1 className="text-2xl font-extrabold"&gt;Windmill Scream Demo&lt;/h1&gt;&#125;&gt;
              <br/>
              &emsp;&emsp;&lt;HeaderGroup floatRight=&#123;true&#125;&gt;
              <br/>
              &emsp;&emsp;&emsp;&emsp;&lt;HeaderItem&gt;
              <br/>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;Button transparent=&#123;true&#125; onClick=&#123;handleGithub&#125;&gt;
              <br/>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;GitHub<br/>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;IconOpenNew className="fill-current float-right ml-2" /&gt;
              <br/>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;/Button&gt;
              <br/>
              &emsp;&emsp;&emsp;&emsp;&lt;/HeaderItem&gt;
              <br/>
              &emsp;&emsp;&lt;/HeaderGroup&gt;
              <br/>
              &lt;/Header&gt;
              <br/>
            </code>
          </pre>
      </div>

      <div
        className="container mx-auto mt-4 flex flex-col">
        <div
          className="md:flex h-12 align-bottom">
          <h2
            className="text-xl font-bold">Buttons</h2>
        </div>
        <div
          className="md:flex flex-wrap">
          <div
            className="xl:w-1/4 lg:w-1/3 md:w-1/2">
            <div
              className="h-16">
              <Button>Default
                Button</Button>
            </div>
            <CodeBlock>
              &lt;Button&gt;
              <br/>
              &emsp;&emsp;Default
              Button<br/>
              &lt;/Button&gt;
              <br/>
              &emsp;
            </CodeBlock>
          </div>
          <div
            className="xl:w-1/4 lg:w-1/3 md:w-1/2">
            <div
              className="h-16">
              <Button
                color="red">Red
                Button</Button>
            </div>
            <CodeBlock>
              &lt;Button
              color=&quot;red&quot;&gt;
              <br/>
              &emsp;&emsp;Red
              Button<br/>
              &lt;/Button&gt;
              <br/>
              &emsp;
            </CodeBlock>
          </div>
          <div
            className="xl:w-1/4 lg:w-1/3 md:w-1/2">
            <div
              className="h-16">
              <Button
                className="h-10"
                slim={true}
                color="green">Slim
                Green
                Button</Button>
            </div>
            <CodeBlock>
              &lt;Button
              className="h-10"<br/>
              &emsp;&emsp;slim=&#123;true&#125; color="green"&gt;
              <br/>
              &emsp;&emsp;&emsp;&emsp;Slim
              Green
              Button<br/>
              &lt;/Button&gt;
            </CodeBlock>
          </div>
          <div
            className="xl:w-1/4 lg:w-1/3 md:w-1/2">
            <div
              className="h-16">
              <Button
                className="h-8"
                slim={true}
                color="secondary">Slimmer
                Secondary
                Button</Button>
            </div>
            <CodeBlock>
              &lt;Button
              className="h-8"<br/>
              &emsp;&emsp;slim=&#123;true&#125; color="secondary"&gt;
              <br/>
              &emsp;&emsp;&emsp;&emsp;Slimmer
              Secondary
              Button<br/>
              &lt;/Button&gt;
            </CodeBlock>
          </div>
        </div>
        <div
          className="md:flex h-12">
          <h2
            className="text-xl font-bold align-bottom">Inputs</h2>
        </div>
        <div
          className="md:flex flex-wrap">
          <div
            className="xl:w-1/4 lg:w-1/3 md:w-1/2">
            <div
              className="h-20">
              <TextInput
                color="teal"
                title="Teal Input"
                name="input1"
                placeholder="Type here"
                className="w-10/12 h-12"/>
            </div>
            <CodeBlock>
              &lt;TextInput
              color="teal"<br/>
              &emsp;&emsp;title="Teal
              Input"
              name="input1"<br/>
              &emsp;&emsp;placeholder="Type
              here"<br/>
              &emsp;&emsp;className="w-10/12
              h-12"
              /&gt;
              <br/>
              &emsp;
              <br/>
              &emsp;
              <br/>
              &emsp;
              <br/>
              &emsp;
              <br/>
              &emsp;
              <br/>
            </CodeBlock>
          </div>
          <div
            className="xl:w-1/4 lg:w-1/3 md:w-1/2">
            <div
              className="h-20">
              <TextInput
                color="blue"
                bgColor="blue"
                title="Blue Input"
                name="input2"
                placeholder="Type something"
                className="w-10/12 h-12"/>
            </div>
            <CodeBlock>
              &lt;TextInput
              color="blue"<br/>
              &emsp;&emsp;bgColor="blue"
              title="Blue
              Input"<br/>
              &emsp;&emsp;name="input2"<br/>
              &emsp;&emsp;placeholder="Type
              something"<br/>
              &emsp;&emsp;className="w-10/12
              h-12"
              /&gt;
              <br/>
              &emsp;
              <br/>
              &emsp;
              <br/>
              &emsp;
              <br/>
              &emsp;
              <br/>
            </CodeBlock>
          </div>
          <div
            className="xl:w-1/4 lg:w-1/3 md:w-1/2">
            <div
              className="h-20">
              <SelectInput
                color="gray"
                title="Gray Select"
                className="w-10/12 h-12">
                <SelectOption/>
                <SelectOption>Option
                  1</SelectOption>
                <SelectOption>Option
                  2</SelectOption>
                <SelectOption>Option
                  3</SelectOption>
                <SelectOption>Option
                  4</SelectOption>
              </SelectInput>
            </div>
            <CodeBlock>
              &lt;SelectInput
              color="gray"<br/>
              &emsp;&emsp;title="Gray
              Select"<br/>
              &emsp;&emsp;className="w-10/12
              h-12"&gt;
              <br/>
              &emsp;&emsp;&emsp;&emsp;&lt;SelectOption
              /&gt;
              <br/>
              &emsp;&emsp;&emsp;&emsp;&lt;SelectOption&gt;Option
              1&lt;/SelectOption&gt;
              <br/>
              &emsp;&emsp;&emsp;&emsp;&lt;SelectOption&gt;Option
              2&lt;/SelectOption&gt;
              <br/>
              &emsp;&emsp;&emsp;&emsp;&lt;SelectOption&gt;Option
              3&lt;/SelectOption&gt;
              <br/>
              &emsp;&emsp;&emsp;&emsp;&lt;SelectOption&gt;Option
              4&lt;/SelectOption&gt;
              <br/>
              &lt;/SelectInput&gt;
              <br/>
            </CodeBlock>
          </div>
          <div
            className="xl:w-1/4 lg:w-1/3 md:w-1/2">


              <div
                className="h-20">
                <DropDown
                  color="primary"
                  title="Primary DropDown"
                  placeholder="Choose One"
                  className="w-10/12 h-12">
                  <DropDownOption>One</DropDownOption>
                  <DropDownOption>Two</DropDownOption>
                  <DropDownOption>Three</DropDownOption>
                  <DropDownOption>Four</DropDownOption>
                </DropDown>
              </div>


            <CodeBlock>
              &lt;DropDown
              color="primary"<br />
              &emsp;&emsp;title="Primary DropDown"<br/>
              &emsp;&emsp;placeholder="Choose One"<br/>
              &emsp;&emsp;className="w-10/12 h-12"&gt;
              <br/>
              &emsp;&emsp;&emsp;&emsp;&lt;DropDownOption&gt;One&lt;/DropDownOption&gt;
              <br/>
              &emsp;&emsp;&emsp;&emsp;&lt;DropDownOption&gt;Two&lt;/DropDownOption&gt;
              <br/>
              &emsp;&emsp;&emsp;&emsp;&lt;DropDownOption&gt;Three&lt;/DropDownOption&gt;
              <br/>
              &emsp;&emsp;&emsp;&emsp;&lt;DropDownOption&gt;Four&lt;/DropDownOption&gt;
              <br/>
              &lt;/DropDown&gt;
              <br/>
            </CodeBlock>
          </div>
        </div>
        <div
          className="md:flex h-12">
          <h2
            className="text-xl font-bold">Checks
            and
            Radios</h2>
        </div>
        <div
          className="md:flex flex-wrap">
          <div
            className="xl:w-1/4 lg:w-1/3 md:w-1/2">
            <div
              className="h-12">
              <Checkbox
                title="Click here"
                className="w-10/12"/>
            </div>
            <CodeBlock>
              &lt;Checkbox
              title="Click
              here"<br/>
              &emsp;&emsp;className="w-10/12"
              /&gt;
              <br/>
              &emsp;
              <br/>
            </CodeBlock>
          </div>
          <div
            className="xl:w-1/4 lg:w-1/3 md:w-1/2">
            <div
              className="h-12">
              <RadioButton
                title="Radio 1"
                name="radioDemo"
                value="1"
                className="w-10/12"/>
            </div>
            <CodeBlock>
              &lt;RadioButton
              title="Radio
              1"<br/>
              &emsp;&emsp;name="radioDemo"
              value="1"<br/>
              &emsp;&emsp;className="w-10/12"
              /&gt;
              <br/>
            </CodeBlock>
          </div>
          <div
            className="xl:w-1/4 lg:w-1/3 md:w-1/2">
            <div
              className="h-12">
              <RadioButton
                title="Radio 2"
                name="radioDemo"
                value="2"
                className="w-10/12"/>
            </div>
            <CodeBlock>
              &lt;RadioButton
              title="Radio
              2"<br/>
              &emsp;&emsp;name="radioDemo"
              value="2"<br/>
              &emsp;&emsp;className="w-10/12"
              /&gt;
              <br/>
            </CodeBlock>
          </div>
          <div
            className="xl:w-1/4 lg:w-1/3 md:w-1/2">
            <div
              className="h-12">
              <RadioButton
                title="Radio 3"
                name="radioDemo"
                value="3"
                className="w-10/12"/>
            </div>
            <CodeBlock>
              &lt;RadioButton
              title="Radio
              3"<br/>
              &emsp;&emsp;name="radioDemo"
              value="3"<br/>
              &emsp;&emsp;className="w-10/12"
              /&gt;
              <br/>
            </CodeBlock>
          </div>
        </div>
        <div
          className="md:flex flex-wrap">
          <div
            className="xl:w-1/4 lg:w-1/3 md:w-1/2">
            <div
              className="h-12">
              <Checkbox
                title="Don't click here"
                color="gray"
                bgColor="gray"
                disabled={true}
                defaultChecked={true}/>
            </div>
            <CodeBlock>
              &lt;Checkbox
              title="Don't
              click
              here"<br/>
              &emsp;&emsp;color="gray"
              bgColor="gray"<br/>
              &emsp;&emsp;disabled=&#123;true&#125; defaultChecked=&#123;true&#125; /&gt;
              <br/>
              &emsp;
              <br/>
            </CodeBlock>
          </div>
          <div
            className="xl:w-1/4 lg:w-1/3 md:w-1/2">
            <div
              className="h-12">
              <RadioButton
                title="Radio A"
                name="colorDemo"
                value="a"
                color="indigo"
                bgColor="indigo"/>
            </div>
            <CodeBlock>
              &lt;RadioButton
              title="Radio
              A"<br/>
              &emsp;&emsp;name="colorDemo"
              value="a"<br/>
              &emsp;&emsp;color="indigo"
              bgColor="indigo"
              /&gt;
              <br/>
              &emsp;
              <br/>
            </CodeBlock>
          </div>
          <div
            className="xl:w-1/4 lg:w-1/3 md:w-1/2">
            <div
              className="h-12">
              <RadioButton
                title="Radio B default"
                name="colorDemo"
                value="b"
                color="pink"
                bgColor="pink"
                defaultChecked={true}/>
            </div>
            <CodeBlock>
              &lt;RadioButton
              title="Radio
              B
              default"<br/>
              &emsp;&emsp;name="colorDemo"
              value="b"<br/>
              &emsp;&emsp;color="pink"
              bgColor="pink"<br/>
              &emsp;&emsp;defaultChecked=&#123;true&#125; /&gt;
              <br/>
            </CodeBlock>
          </div>
          <div
            className="xl:w-1/4 lg:w-1/3 md:w-1/2">
            <div
              className="h-12">
              <RadioButton
                title="Radio C disabled"
                name="colorDemo"
                value="c"
                color="gray"
                bgColor="gray"
                disabled={true}/>
            </div>
            <CodeBlock>
              &lt;RadioButton
              title="Radio
              C
              disabled"<br/>
              &emsp;&emsp;name="colorDemo"
              value="c"<br/>
              &emsp;&emsp;color="gray"
              bgColor="gray"<br/>
              &emsp;&emsp;disabled=&#123;true&#125; /&gt;
              <br/>
            </CodeBlock>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
