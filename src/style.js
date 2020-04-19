import { css } from 'lit-element';

export const buttonStyles = css`
  .Button {
    border: 1px solid transparent;
    border-radius: 4px;
    bottom: 30px;
    cursor: pointer;
    font-size: 1.25rem;
    line-height: 1.5;
    opacity: 1;
    outline: none;
    padding: calc(0.375em - 1px) 0.75em;
    position: fixed;
    right: 30px;
    text-align: center;
    transition: visible 0.33s linear, opacity 0.33s linear;
  }

  .Button:hover {
    box-shadow: 0 8px 6px -6px black;
  }

  .Button .Icon {
    height: 1.5em;
    width: 1.5em;
  }

  .Button .Icon:first-child:last-child {
    margin-left: calc(-0.375em - 1px);
    margin-right: calc(-0.375em - 1px);
  }

  .Button--danger {
    background-color: #b71c1c;
    color: #f5f5f5;
  }

  .Button--dark {
    background-color: #212121;
    color: #f5f5f5;
  }

  .Button--info {
    background-color: #40c4ff;
    color: #f5f5f5;
  }

  .Button--light {
    background-color: #f5f5f5;
    color: #212121;
  }

  .Button--primary {
    background-color: #263238;
    color: #f5f5f5;
  }

  .Button--success {
    background-color: #43a047;
    color: #f5f5f5;
  }

  .Button--warning {
    background-color: #fbc02d;
    color: #f5f5f5;
  }

  .Button--flat {
    border-radius: 0;
  }

  .Button--rounded {
    border-radius: 50%;
  }

  .Button--invisible {
    opacity: 0;
    pointer-events: none;
    transition: visible 0.33s linear, opacity 0.33s linear;
    visible: hidden;
  }
`;

export const iconStyles = css`
  .Icon {
    align-items: center;
    display: inline-flex;
    justify-content: center;
  }
`;
