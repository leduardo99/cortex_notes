import styled from "styled-components";

import box from '@/shared/assets/img/text_box_center.png'

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 32px;
`;

export const ModalWrapper = styled.div`
  --font-size: 1rem;
  --padding-tb: var(--25rpx);

  font-family: var(--font-family);
  font-size: var(--font-size);

  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: min-content max-content min-content;
  gap: 0 0;
  justify-content: stretch;
  align-content: stretch;
  justify-items: center;
  align-items: stretch;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    gap: 20px;

    min-width: 360px;
    min-height: 150px;

    background: transparent url(${box}) no-repeat;
    background-size: 105% 100%;
    color: #fff;
    padding: var(--padding-tb) var(--25rpx);

    &-title {
      font-size: 1.5rem;
    }

    ${Actions} {
      width: 100%;
      
      padding: 0;
    }
  }
`;
