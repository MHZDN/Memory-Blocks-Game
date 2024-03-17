import cv2
import os

image_folder = "imgs"   #name of the orginal images folder
resized_folder = "resized_imgs" #name of the resized imgs folder
All_images = os.listdir(image_folder)  # list for JPG images

for png in All_images:
    img_path = os.path.join(image_folder, png)
    img = cv2.imread(img_path,cv2.IMREAD_UNCHANGED)  #cv2.IMREAD_UNCHANGED -> to preserve the Transparency of the PNG image
    resized_img = cv2.resize(img, (250, 250)) # <- enter here the new size of the icons
    cv2.imwrite(os.path.join(resized_folder, png), resized_img) #dont worry it will overwrite on the imgaes
    cv2.imshow("img",img)
    cv2.waitKey(100)
cv2.destroyAllWindows()

