import styled from 'styled-components';

export const ProfilePicture = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 30px;
  @media (min-width: 1024px) {
    width: 40vw;
    height: 40vw; 
    max-width: 670px;
    max-height: 670px;
    margin-right: 8%;
  }
`;
export const Photo = styled.img`
  margin-top: 20px;
  height: 80vw; 
  width: 80vw;
  max-width: 560px;
  max-height: 560px;
  background-size: 101%;
  background-color: ${(props) => props.theme.mainColors.primary};
  border-radius: 100%;
  @media (min-width: 768px) {
    width: 40vw;
    height: 40vw; 
  }
  @media (min-width: 1024px) {
    max-width: 670px;
    max-height: 670px;
  }
`;
export const Socials = styled.div`
`;