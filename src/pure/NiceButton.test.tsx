import React from 'react';
import ReactDOM from 'react-dom';
import NiceButton from './NiceButton';

describe('NiceButton', () => {
  let div: HTMLDivElement;
  let button: HTMLButtonElement;

  describe('ordinary props', () => {
    beforeEach(() => {
      div = document.createElement('div');
      const component = (
        <NiceButton className="hello">
          Hello!
        </NiceButton>
      );
      ReactDOM.render(component, div);
      button = div.firstChild as HTMLButtonElement;
    });

    it('renders with text', () => {
      expect(div.textContent).toMatch('Hello!');
    });

    it('renders with class names', () => {
      expect(button.className).toMatch('hello');
    });
  });

  describe('default type', () => {
    beforeEach(() => {
      div = document.createElement('div');
      const component = (
        <NiceButton className="hello">
          Hello!
        </NiceButton>
      );
      ReactDOM.render(component, div);
      button = div.firstChild as HTMLButtonElement;
    });

    it('renders with default type', () => {
      expect(button.type).toMatch('button');
    });
  });

  describe('submit type', () => {
    beforeEach(() => {
      div = document.createElement('div');
      const component = (
        <NiceButton type="submit">
          Hello!
        </NiceButton>
      );
      ReactDOM.render(component, div);
      button = div.firstChild as HTMLButtonElement;
    });

    it('renders with specified type', () => {
      expect(button.type).toMatch('submit');
    });
  });
});
